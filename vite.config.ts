import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react-swc';

// Configuração do Vite: https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin()],
});

