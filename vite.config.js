import { defineConfig } from 'vite';

// GitHub Pages supplies an empty root path or a project path such as /homepage.
const pagesPath = (process.env.PAGES_BASE_PATH || '').replace(/^\/+|\/+$/g, '');

export default defineConfig({
  base: pagesPath ? `/${pagesPath}/` : '/',
});
