import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      fileName: 'swagger-ui',
      formats: ['umd'],
      name: 'SwaggerPlugin',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        entryFileNames: 'swagger-ui.js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react({
    jsxRuntime: 'classic',
  })],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
})
