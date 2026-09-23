import { useEffect } from 'react';

const SITE_URL = 'https://makata.ai';

const setMeta = (selector: string, attr: 'content' | 'href', value: string) => {
  document.head.querySelector(selector)?.setAttribute(attr, value);
};

/**
 * Per-route title, description, and canonical URL for the SPA. index.html carries the
 * homepage defaults; this keeps them correct after client-side navigation.
 */
export function usePageMeta({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);
}
