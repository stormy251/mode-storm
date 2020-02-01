module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parser: 'babel-eslint',
	plugins: [
		'react',
		'react-hooks'
	],
	settings: {
		react: {
			version: 'detect'
		}
	},
	rules: {
		semi: ['error', 'always'],
		indent: ['error', 2, {'SwitchCase': 1}],
		'object-curly-spacing': 2,
		'space-before-function-paren': ['error', 'always'],
		'quotes': [2, 'single', {'avoidEscape': true}],
		'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
		'comma-dangle': ['error', 'never']
	}
};
