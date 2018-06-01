import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json';

export default [
	{
		input: 'src/index.mjs',
		external: [
			'node-fetch'
		],
		plugins: [
			resolve({
				extensions: ['.mjs', '.js'],
				preferBuiltins: true,
			}),
			commonjs()
		],
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				exports: 'named'
			}
		]
	},
	{
		input: 'src/browser.mjs',
		external: [
			'node-fetch'
		],
		plugins: [
			resolve({
				extensions: ['.mjs', '.js'],
				preferBuiltins: true,
			}),
			commonjs()
		],
		output: [
			{
				file: pkg.browser,
				format: 'cjs',
				exports: 'named'
			}
		]
	},
];
