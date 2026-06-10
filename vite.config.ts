import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          lease: path.resolve(__dirname, 'lease.html'),
          ppe: path.resolve(__dirname, 'ppe.html'),
          financial: path.resolve(__dirname, 'financial-instruments.html'),
          revenue: path.resolve(__dirname, 'revenue.html'),
          deferred: path.resolve(__dirname, 'deferred-tax.html'),
          consolidation: path.resolve(__dirname, 'consolidation.html'),
          impairment: path.resolve(__dirname, 'impairment.html'),
          esop: path.resolve(__dirname, 'esop.html'),
          cashflows: path.resolve(__dirname, 'cashflows.html'),
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
