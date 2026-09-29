import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Domínio próprio (arturneri.me) na raiz. Para usar sem domínio,
  // troque por '/nome-do-repo/'.
  base: '/',
  plugins: [react()],
})
