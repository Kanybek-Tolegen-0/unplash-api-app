import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './src')

  return ({
    plugins: [
      react(), 
      svgr({
        svgrOptions: {
          exportType: "default",
          icon: true,
        },
        include: ['**/*.svg', '*.svg']
      })
    ],
    define: {
      "import.meta.env.VITE_UNSPLASH_ACCESS_KEY": JSON.stringify(env.VITE_UNSPLASH_ACCESS_KEY),
      "import.meta.env.VITE_API_BASE_URL": JSON.stringify(env.VITE_API_BASE_URL)
    },
  })
})