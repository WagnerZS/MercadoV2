import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Altere 'seu-usuario' e 'seu-repo' para o seu usuário e repositório
export default defineConfig({
  base: '/Mercado/', // coloque o nome do seu repositório aqui
  plugins: [react(), tailwindcss()],
})
