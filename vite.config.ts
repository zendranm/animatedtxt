import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import dts from 'rollup-plugin-dts';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), dts({ rollupTypes: true })],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'animatedtxt',
			formats: ['es', 'cjs'],
			fileName: format => `animatedtxt.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
				},
			},
		},
	},
});
