import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		tailwindcss(),
		vue(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			vue: 'vue/dist/vue.esm-bundler.js',
		},
	},
})
