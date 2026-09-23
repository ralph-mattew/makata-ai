import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles, Navigation, Footer, ScrollManager } from './components/Layout';
import Home from './pages/Home';
import XyloCaseStudy from './pages/XyloCaseStudy';
import UnawainCaseStudy from './pages/UnawainCaseStudy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <GlobalStyles />
      <ScrollManager />
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/xylo" element={<XyloCaseStudy />} />
          <Route path="/work/unawain" element={<UnawainCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
