import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // REEMPLAZA "NOMBRE_DEL_REPO" POR EL NOMBRE REAL DE TU REPOSITORIO EN GITHUB
  base: '/landing-formacion/', 
})
