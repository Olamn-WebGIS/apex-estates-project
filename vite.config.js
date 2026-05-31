import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // or '@vitejs/plugin-react' depending on your setup

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/apex-estates-project/', // 👈 ADD THIS EXACT LINE WITH YOUR REPO NAME
})