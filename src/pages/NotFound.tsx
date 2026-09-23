import React from 'react';
import { Button } from '../components/Layout';
import { usePageMeta } from '../lib/usePageMeta';

export default function NotFound() {
  usePageMeta({
    title: 'Page not found | Makata AI Edge Lab',
    description: 'This page does not exist.',
    path: '/404',
  });

  return (
    <section className="max-w-3xl mx-auto px-6 pt-40 pb-32 text-center space-y-6">
      <span className="block font-mono text-xs uppercase tracking-eyebrow text-slate-500">404</span>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Nothing measured here.</h1>
      <p className="text-slate-600 text-lg">This page doesn&apos;t exist, or it has moved.</p>
      <div className="flex justify-center pt-2">
        <Button variant="dark" href="/">Back to the lab</Button>
      </div>
    </section>
  );
}
