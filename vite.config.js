import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/meu-portfolio/', // ← MUDE para o nome do SEU repositório!
})