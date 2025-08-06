import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Capstone-Project',
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig(({ command }) => {
//   return {
//     plugins: [react()],
//     base: command === 'build' ? '/Capstone-Project/' : '/', // 👈 no dev, fica "/"
//     //Essa operação ternária é necessário para funcionar tanto localmente quanto em produção online
//   }
// })
