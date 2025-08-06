import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base: command === 'build' ? '/Capstone-Project/' : '/', // 👈 no dev, fica "/"
    //sem essa operação ternário ficaria ruim fazer o uso no git pages e no local
  }
})
