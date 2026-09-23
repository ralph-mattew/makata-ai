# MAKATA.ai — Security, Privacy & Threat Model Specification

**Document Type:** Security / Privacy / Threat Model
**Status:** Design artifact
**Purpose:** Define the security boundaries, privacy requirements, threat model, and operational safeguards for MAKATA.ai and its interactive AI demonstrations.

---

# 1. Security Philosophy

MAKATA.ai should demonstrate sophisticated engineering without creating unnecessary security complexity.

The governing principle is:

> **Expose the engineering, not the secrets.**

Visitors should be able to inspect:

- Architecture
- Models
- Benchmarks
- Experiments
- Constraints
- Failure modes
- System behavior

They should **not** gain access to:

- API keys
- Server credentials
- Private repositories
- Infrastructure credentials
- Environment variables
- User data
- Internal administrative interfaces
- Unrestricted model endpoints

---

# 2. Security Boundary

The redesigned site should be divided into four conceptual zones.

```text
┌─────────────────────────────┐
│ PUBLIC WEBSITE              │
│                             │
│ Pages / Projects / Notes    │
│ Architecture / Benchmarks   │
└──────────────┬──────────────┘
               │
               │ controlled interaction
               ▼
┌─────────────────────────────┐
│ DEMO BOUNDARY               │
│                             │
│ Validation / rate limits    │
│ request controls            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ AI / APPLICATION SERVICES   │
│                             │
│ Models / APIs / processing   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ PRIVATE INFRASTRUCTURE      │
│                             │
│ Secrets / credentials       │
│ deployment / administration │
└─────────────────────────────┘
```

The public browser must never become the trust boundary for secrets.

---

# 3. Threat Model

The redesign should explicitly consider the following threat categories.

## T1 — Credential exposure

Examples:

- API keys bundled into JavaScript
- Secrets in Git
- Environment variables exposed through client configuration
- Credentials embedded in demo requests

**Risk:** unauthorized use, financial cost, service compromise.

---

## T2 — Demo abuse

Examples:

- Automated requests
- Excessive inference
- Resource exhaustion
- Prompt abuse
- Large document uploads
- Repeated expensive model calls

**Risk:** cost, availability, degraded service.

---

## T3 — Malicious input

Examples:

- Oversized documents
- Malformed files
- Unexpected encodings
- Prompt injection
- HTML/script payloads
- Path traversal attempts

**Risk:** application compromise or unreliable behavior.

---

## T4 — Data leakage

Examples:

- Uploaded documents appearing in logs
- Sensitive input included in analytics
- Error messages exposing content
- Third-party services receiving unintended data

**Risk:** privacy breach.

---

## T5 — Infrastructure exposure

Examples:

- Public admin endpoints
- Debug endpoints
- Internal API routes
- Stack traces
- Deployment metadata
- Source maps containing sensitive information

**Risk:** reconnaissance or direct compromise.

---

## T6 — Supply-chain risk

Examples:

- Vulnerable dependencies
- Abandoned packages
- Malicious package updates
- Excessive third-party scripts

**Risk:** application compromise.

---

## T7 — Intellectual property exposure

MAKATA.ai intentionally exposes technical details.

However, there is a difference between:

> **Explaining the architecture**

and:

> **Publishing secrets or proprietary implementation details.**

The site should disclose enough to demonstrate engineering without accidentally exposing credentials, private datasets, proprietary algorithms, or confidential employer information.

---

# 4. Secret Management

## Absolute rule

**No secret belongs in client-side code.**

Never expose:

```text
API keys
Access tokens
Private keys
Database credentials
Service credentials
Webhook secrets
Admin tokens
```

through:

```text
React/Vue/Next client bundles
HTML
public assets
browser local storage
URL parameters
Git repository
public configuration
```

---

# 5. Server-Side AI Calls

If a demo requires a remote AI provider:

```text
Browser
   ↓
MAKATA API
   ↓
AI provider
```

not:

```text
Browser
   ↓
AI provider
```

The server should control:

- Authentication where needed
- Validation
- Rate limiting
- Model selection
- Input limits
- Output limits
- Cost controls
- Logging
- Error handling

---

# 6. API Key Protection

API keys should be:

- Stored in deployment secrets
- Injected server-side
- Excluded from repository
- Excluded from client bundles
- Rotatable
- Restricted where provider supports restrictions

If a key is accidentally exposed:

> **Rotate it immediately.**

Do not simply remove it from the latest commit and assume the problem is solved.

---

# 7. Environment Separation

Maintain distinct environments where practical:

```text
Development
Preview
Production
```

Production credentials should never be reused casually in development.

Prefer:

```text
DEV_AI_KEY
PREVIEW_AI_KEY
PROD_AI_KEY
```

where the provider and architecture permit this separation.

---

# 8. Demo Abuse Protection

Every live AI demo should have explicit limits.

Potential controls:

- Request rate limits
- Maximum input size
- Maximum output size
- Maximum execution time
- Concurrent-request limits
- Daily/monthly budget
- Per-IP throttling where appropriate
- Request validation
- Abuse detection

The limits should be proportional to the demo.

A small portfolio demo does not need enterprise-grade identity infrastructure.

---

# 9. Cost Protection

A public AI demo can become unexpectedly expensive.

For each live demo define:

| Parameter       | Example                |
| --------------- | ---------------------- |
| Max input       | 10 MB                  |
| Max tokens      | Defined per model      |
| Timeout         | 30–60 s                |
| Rate limit      | Defined per deployment |
| Concurrent runs | Small fixed limit      |
| Daily budget    | Explicit ceiling       |
| Fallback        | Recorded result        |

The actual values should be established after measuring the real implementation.

---

# 10. Precomputed and Hybrid Demos

When live inference provides little additional value, prefer:

> **PRECOMPUTED**

or:

> **HYBRID**

over an unrestricted live API.

For example:

```text
Visitor
 ↓
Sample document
 ↓
Recorded AI result
 ↓
Architecture explanation
```

can demonstrate the system without creating continuous inference cost.

Live computation should be reserved for interactions where the live behavior itself is part of the engineering story.

---

# 11. File Upload Security

If MAKATA.ai supports document upload, treat every upload as untrusted.

Controls should include:

- File size limits
- Allowed file types
- MIME validation
- Filename normalization
- Content validation
- Processing timeouts
- Memory limits
- Temporary storage controls
- Automatic cleanup
- Malware/security scanning where appropriate
- Isolation of document processing

Never assume:

> `.pdf`

means:

> safe PDF.

---

# 12. Document Privacy

For any document-processing demo, clearly communicate:

> Where is the document processed?

Possible states:

**ON DEVICE**

> The document remains on the device.

**SERVER**

> The document is sent to a server for processing.

**THIRD-PARTY AI**

> The document is processed using an external AI service.

**PRECOMPUTED**

> No uploaded document is processed during this demonstration.

The UI must reflect the actual architecture.

---

# 13. Analytics/Data Boundary

Document contents must never automatically enter analytics.

Bad:

```text
analytics.log({
  input: documentText
})
```

Good:

```text
analytics.track("demo_started", {
  project: "xylo"
})
```

Never log:

- Document text
- Prompts containing user data
- Model outputs containing user data
- Personal identifiers
- Authentication tokens

unless explicitly required and appropriately protected.

---

# 14. Prompt Injection

Public AI demos should assume that input may be adversarial.

For document or text-processing systems:

> **Input content is data, not instructions.**

Where applicable, the application should separate:

```text
SYSTEM INSTRUCTIONS
USER REQUEST
DOCUMENT CONTENT
```

and establish appropriate model/system boundaries.

Do not assume that a prompt instructing the model to reveal system instructions will be harmless.

---

# 15. Output Handling

AI output should be treated as untrusted content.

If rendered as HTML:

- Sanitize it
- Escape dangerous content
- Avoid arbitrary script execution
- Restrict embedded markup

Prefer plain text or controlled structured rendering wherever possible.

---

# 16. Prompt / System Instruction Disclosure

Do not expose internal prompts merely because the model was asked to reveal them.

If a demo intentionally demonstrates prompt behavior, create a controlled test environment.

Do not publish:

- Production credentials
- Hidden security rules
- Provider secrets
- Internal operational instructions

The site can explain the architecture without exposing security-sensitive implementation details.

---

# 17. Error Handling

Production demos should not expose raw stack traces.

Bad:

> `TypeError: Cannot read properties of undefined at /app/services/ai.js:183`

Preferred:

> **The demo couldn't complete this run.**

Technical detail can be surfaced separately when safe:

> `MODEL_UNAVAILABLE`

The public response should not become an accidental debugging endpoint.

---

# 18. Logging

Logs should answer:

> What happened?

without storing:

> What private information did the user submit?

Prefer:

```text
request_id
timestamp
demo
execution_time
status
error_category
model
```

Avoid:

```text
full_prompt
full_document
full_output
authorization_header
```

unless explicitly required and securely handled.

---

# 19. Request Correlation

A request ID can make failures diagnosable without exposing internal information.

Example:

> Something went wrong. Reference: `RUN-7F82`

The server can then locate the corresponding event internally.

Do not expose unnecessary infrastructure identifiers.

---

# 20. CORS

If an API is exposed:

- Restrict allowed origins where possible
- Avoid wildcard origins unless genuinely required
- Restrict HTTP methods
- Restrict headers
- Review credential handling

CORS is not authentication.

A CORS restriction should never be treated as the primary security barrier.

---

# 21. Authentication

Do not introduce authentication simply because it sounds more secure.

For public demos, consider:

> No account + strict rate limits

before:

> Account registration + password management

Authentication adds:

- Credential storage
- Password reset
- Session management
- Abuse handling
- Privacy obligations
- More attack surface

Only introduce it when the product actually requires persistent user state or protected functionality.

---

# 22. Dependency Security

The redesign audit should inspect:

- Direct dependencies
- Transitive dependencies
- Outdated packages
- Known vulnerabilities
- Unused packages
- Abandoned packages
- Build plugins
- Analytics packages
- UI libraries

Classify dependencies:

> Core / Useful / Replaceable / Suspicious / Obsolete / Risky

Do not upgrade every dependency automatically during the redesign.

A dependency upgrade can introduce unrelated regressions.

---

# 23. Browser Security Headers

Evaluate appropriate headers such as:

- Content-Security-Policy
- Strict-Transport-Security
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Frame protections where appropriate

Exact configuration depends on the final hosting architecture.

Do not blindly copy a generic security-header configuration.

---

# 24. Content Security Policy

CSP should be introduced carefully.

The objective is to reduce:

- XSS risk
- Unauthorized script execution
- Unexpected third-party content

But an overly restrictive CSP can break:

- Analytics
- AI demos
- Embedded media
- Fonts
- Third-party integrations

Therefore CSP should be tested against every production feature.

---

# 25. HTTPS

All production traffic should use HTTPS.

Redirect HTTP to HTTPS.

Ensure:

- Certificates valid
- No mixed content
- Secure cookies where cookies exist
- Secure external integrations

---

# 26. Administrative Surface

Administrative functions should not be part of the public website architecture.

Avoid publicly accessible:

```text
/admin
/debug
/test
/internal
/metrics
/dev
```

unless explicitly protected.

If administrative tools are needed, isolate them from the public application.

---

# 27. Source Code Exposure

Public frontend source code is not inherently a vulnerability.

The key distinction is:

> **Source visibility ≠ secret visibility.**

If a repository is public, ensure it contains no:

- Credentials
- Tokens
- Private datasets
- Confidential configuration
- Employer information
- Internal infrastructure secrets

If source maps are published, understand what they expose.

---

# 28. Employer / Confidentiality Boundary

MAKATA.ai must not accidentally publish confidential information from professional work.

Avoid publishing:

- Proprietary architecture
- Internal company metrics
- Customer information
- Non-public model configurations
- Internal source code
- Confidential project details
- Screenshots containing private information

When describing professional experience:

> Explain your role and publicly defensible technical contribution.

Do not imply ownership of systems you did not own or have permission to publish.

---

# 29. Intellectual Property Classification

Before publishing an artifact, classify it:

### PUBLIC

Safe to publish.

### DERIVED PUBLIC

Based on publicly available information or your own implementation.

### PERSONAL PROPRIETARY

Your own unpublished work that you may intentionally disclose.

### CONFIDENTIAL

Do not publish.

### THIRD-PARTY RESTRICTED

Requires permission or licensing.

Only PUBLIC and intentionally cleared material should enter the production site.

---

# 30. Privacy Policy

If MAKATA.ai collects:

- Contact information
- Analytics
- Cookies
- Demo inputs
- Email addresses

the site should provide an appropriate privacy notice.

The notice should accurately explain:

- What is collected
- Why
- Where it is processed
- Third parties involved
- Retention
- User choices
- Contact mechanism

Do not copy a generic SaaS privacy policy that describes systems MAKATA.ai does not actually operate.

---

# 31. Data Retention

For transient demos:

> **Default: don't retain the input.**

If temporary storage is required:

- Define retention period
- Delete automatically
- Minimize copies
- Avoid unnecessary backups
- Document the behavior

For a portfolio demo, permanent storage of visitor documents is usually unnecessary.

---

# 32. Third-Party Services

Every third-party service should have a reason to exist.

Potential categories:

- Analytics
- AI provider
- Hosting
- Forms
- Email
- CDN
- Monitoring
- Fonts
- Video

For each service ask:

> What data does this service receive?

> Is it necessary?

> Can the same function be implemented locally?

> Does it materially affect privacy or performance?

---

# 33. Security Monitoring

Monitor meaningful security signals:

- Unusual request volume
- Repeated failures
- Rate-limit violations
- Unexpected API cost
- Error spikes
- Deployment anomalies

Do not build a huge security monitoring platform for a small portfolio unless the live system's risk warrants it.

---

# 34. Incident Response

Define a simple response procedure.

### Step 1 — Detect

Identify:

- Credential leak
- Demo abuse
- Data exposure
- Service compromise
- Unexpected cost

### Step 2 — Contain

Examples:

- Disable demo
- Rotate credentials
- Block abusive traffic
- Remove exposed content
- Disable affected endpoint

### Step 3 — Investigate

Determine:

- What happened?
- When?
- What was affected?
- Was data exposed?

### Step 4 — Recover

- Restore service
- Patch vulnerability
- Rotate credentials
- Verify controls

### Step 5 — Document

Record:

> Incident → Cause → Impact → Fix → Prevention

This becomes another engineering learning artifact when appropriate.

---

# 35. Security Testing

Before launch:

### Application

- [ ] Input validation
- [ ] Output sanitization
- [ ] File limits
- [ ] Error handling
- [ ] Rate limiting

### Infrastructure

- [ ] Secrets protected
- [ ] HTTPS
- [ ] Security headers
- [ ] CORS reviewed
- [ ] Admin surfaces protected

### AI

- [ ] Prompt injection considered
- [ ] Input/output boundaries defined
- [ ] Model abuse limits
- [ ] Cost controls
- [ ] Provider configuration reviewed

### Privacy

- [ ] Analytics reviewed
- [ ] Demo data reviewed
- [ ] Retention defined
- [ ] Third-party processing documented

---

# 36. Security Priority

## P0 — Must have

- No client-side secrets
- HTTPS
- Input validation
- Rate limiting for live AI
- Request size limits
- Error sanitization
- Secure environment variables
- No sensitive data in analytics
- Basic dependency review
- Demo cost ceiling

## P1

- CSP
- Security headers
- Automated dependency scanning
- Better abuse detection
- Request correlation
- Structured security logging
- File-processing isolation

## P2

- Automated penetration testing
- Advanced anomaly detection
- Dedicated security monitoring
- Formal threat-model automation

## P3

Do not build elaborate enterprise security infrastructure for a low-risk static portfolio unless the architecture changes.

---

# 37. Security Acceptance Test

A stranger should be able to:

> Visit MAKATA.ai
> Explore projects
> Run a demo
> Inspect architecture
> Read experiments
> View technical evidence

without being able to:

> Obtain credentials
> Access private infrastructure
> Read another visitor's document
> Arbitrarily consume expensive AI resources
> Reach administrative functionality

That is the core security boundary.

---

# 38. Final Principle

MAKATA.ai should demonstrate technical transparency without confusing transparency with unrestricted access.

The ideal boundary is:

> **Open about the engineering. Closed around the secrets.**

And for interactive AI:

> **Useful enough to demonstrate the system. Constrained enough that the public internet cannot accidentally become its production workload.**

Security should therefore be treated as part of the engineering story—not as something bolted on after the redesign.
