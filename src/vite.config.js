import {dirname} from 'node:path'
import { fileURLToPath } from 'node:url'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import RubyPlugin from 'vite-plugin-ruby'

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        RubyPlugin(),
    ],
    base: "./"
})