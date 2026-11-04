import { defineConfig, type Plugin, type Connect } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Netlify serves /work from work.html; mirror that locally in dev and preview.
const cleanUrls = (): Plugin => {
  const rewrite: Connect.NextHandleFunction = (req, _res, next) => {
    if (req.url && /^\/work\/?(\?|#|$)/.test(req.url)) req.url = req.url.replace(/^\/work\/?/, '/work.html');
    next();
  };
  return {
    name: 'clean-urls',
    configureServer: (server) => void server.middlewares.use(rewrite),
    configurePreviewServer: (server) => void server.middlewares.use(rewrite),
  };
};

// Multi-page build: each page is a real .html file.
export default defineConfig({
  plugins: [react(), cleanUrls()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        work: resolve(__dirname, 'work.html'),
      },
    },
  },
});
