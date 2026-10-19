import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { seo } from './src/data/seo';

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'portfolio-seo',
      transformIndexHtml(html) {
        return html
          .replaceAll('%SEO_TITLE%', escapeHtml(seo.title))
          .replaceAll('%SEO_DESCRIPTION%', escapeHtml(seo.description))
          .replaceAll(
            '%SEO_SOCIAL_DESCRIPTION%',
            escapeHtml(seo.socialDescription),
          );
      },
    },
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
});
