import Foundation
import NaturalLanguage

// Host timing check for Xylo's RAG stages, compiled against the unmodified
// DocumentChunker / DocumentEmbedder / DocumentRetriever / DocumentChatSession sources.

struct SplitMix64 {
    var state: UInt64
    mutating func next() -> UInt64 {
        state &+= 0x9E3779B97F4A7C15
        var z = state
        z = (z ^ (z >> 30)) &* 0xBF58476D1CE4E5B9
        z = (z ^ (z >> 27)) &* 0x94D049BB133111EB
        return z ^ (z >> 31)
    }
    mutating func pick<T>(_ a: [T]) -> T { a[Int(next() % UInt64(a.count))] }
}

let subjects = ["The Client", "The Contractor", "Either party", "The Lessee", "The Service Provider", "The Company"]
let verbs = ["shall pay", "shall deliver", "must notify", "agrees to reimburse", "may terminate", "shall provide"]
let objects = ["the monthly fee of PHP 12,500", "written notice within thirty (30) days", "all invoices issued under this Agreement",
               "the deliverables described in Schedule A", "any damages arising from late performance", "the security deposit"]
let tails = ["unless otherwise agreed in writing.", "subject to Section 4 of this Agreement.", "on or before the fifth day of each month.",
             "in accordance with applicable Philippine law.", "without prejudice to other remedies.", "after the effective date."]

func makeDocument(pages: Int, wordsPerPage: Int, seed: UInt64) -> [DocumentChunker.PageText] {
    var rng = SplitMix64(state: seed)
    var result: [DocumentChunker.PageText] = []
    var section = 1
    for p in 1...pages {
        var paragraphs: [String] = []
        var words = 0
        while words < wordsPerPage {
            var para = ["Section \(section). Terms and Obligations"]
            section += 1
            let n = 3 + Int(rng.next() % 6)
            for _ in 0..<n {
                para.append("\(rng.pick(subjects)) \(rng.pick(verbs)) \(rng.pick(objects)) \(rng.pick(tails))")
            }
            let text = para.joined(separator: " ")
            words += text.split(separator: " ").count
            paragraphs.append(text)
        }
        result.append(.init(text: paragraphs.joined(separator: "\n\n"), pageNumber: p))
    }
    return result
}

func ms(_ d: Duration) -> Double {
    let c = d.components
    return Double(c.seconds) * 1000 + Double(c.attoseconds) / 1e15
}

func pct(_ xs: [Double], _ q: Double) -> Double {
    let s = xs.sorted()
    let pos = q * Double(s.count - 1)
    let lo = Int(pos.rounded(.down)), hi = Int(pos.rounded(.up))
    return s[lo] + (s[hi] - s[lo]) * (pos - Double(lo))
}

func summary(_ xs: [Double]) -> [String: Double] {
    ["p50_ms": pct(xs, 0.5), "p90_ms": pct(xs, 0.9), "min_ms": xs.min()!, "max_ms": xs.max()!]
}

let iterations = 30
let configs: [(String, ChunkingConfig)] = [
    ("6-8GB", ChunkingConfig(targetChunkWords: 175, overlapWords: 30, topK: 3)),
    ("12GB+", ChunkingConfig(targetChunkWords: 225, overlapWords: 50, topK: 5)),
]
let queries = ["When is the monthly fee due?", "How can the contract be terminated?", "What happens to the security deposit?"]
let pages = makeDocument(pages: 10, wordsPerPage: 500, seed: 42)
let totalWords = pages.reduce(0) { $0 + $1.text.split(separator: " ").count }

let embedder = DocumentEmbedder()
let clock = ContinuousClock()

// Cold: first NLEmbedding load + first vector (process-wide cache, measured once).
let coldStart = clock.now
_ = embedder.embedQuery("warm up")
let coldLoadMs = ms(clock.now - coldStart)
let hasSentenceEmbedding = NLEmbedding.sentenceEmbedding(for: .english) != nil

var out: [String: Any] = [
    "experiment": "xylo-rag-host-check",
    "document": ["pages": 10, "words": totalWords, "kind": "synthetic contract-style English, SplitMix64 seed 42"],
    "iterations": iterations,
    "nl_sentence_embedding_available": hasSentenceEmbedding,
    "embedding_cold_load_ms": coldLoadMs,
    "os": ProcessInfo.processInfo.operatingSystemVersionString,
    "physical_memory_gb": Double(ProcessInfo.processInfo.physicalMemory) / 1e9,
    "thermal_state_start": ProcessInfo.processInfo.thermalState.rawValue,
]

var perConfig: [String: Any] = [:]
for (name, cfg) in configs {
    let chunker = DocumentChunker(config: cfg)
    var chunkT: [Double] = [], embedT: [Double] = [], queryEmbT: [Double] = [], retrieveT: [Double] = []
    var chunkCount = 0, dim = 0
    for i in 0..<iterations {
        var t = clock.now
        let chunks = chunker.chunk(pages: pages)
        chunkT.append(ms(clock.now - t))
        t = clock.now
        let embedded = embedder.embedChunks(chunks)
        embedT.append(ms(clock.now - t))
        chunkCount = chunks.count
        dim = embedded.first?.embedding.count ?? 0
        let session = DocumentChatSession(documentId: UUID(), summary: "", embeddedChunks: embedded)
        let q = queries[i % queries.count]
        t = clock.now
        let qv = embedder.embedQuery(q)
        queryEmbT.append(ms(clock.now - t))
        t = clock.now
        let hits = DocumentRetriever().retrieve(query: q, queryEmbedding: qv, from: session, topK: cfg.topK)
        retrieveT.append(ms(clock.now - t))
        precondition(!hits.isEmpty)
    }
    perConfig[name] = [
        "target_chunk_words": cfg.targetChunkWords, "overlap_words": cfg.overlapWords, "top_k": cfg.topK,
        "chunk_count": chunkCount, "embedding_dim": dim,
        "chunk": summary(chunkT), "embed_all_chunks": summary(embedT),
        "embed_query": summary(queryEmbT), "retrieve_top_k": summary(retrieveT),
    ]
}
out["configs"] = perConfig
out["thermal_state_end"] = ProcessInfo.processInfo.thermalState.rawValue

let data = try JSONSerialization.data(withJSONObject: out, options: [.prettyPrinted, .sortedKeys])
print(String(data: data, encoding: .utf8)!)
