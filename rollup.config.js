import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import packageJson from './package.json';
import replace from '@rollup/plugin-replace';

// const packageJson = require("./package.json");

export default [
	{
		input: 'lib/index.ts',
		external: ['react', 'react-dom', 'react-refresh'],
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				exports: 'named',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'es',
				exports: 'named',
				sourcemap: true,
			},
		],
		plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
        preventAssignment: true,
      }),
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
		],
		external: ['react', 'react-dom'],
	},
];
