import vinext from 'vinext';
import { defineConfig } from 'vite';
const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/+$/, '');

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? `${publicBasePath}/` : '/',
  define: {
    'process.env.NEXT_PUBLIC_BASE_PATH': JSON.stringify(publicBasePath),
  },
  plugins: [
    vinext({
      nextConfig: {
        output: 'export',
      },
    }),
  ],
}));
