module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false
	},
	extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
	plugins: [],
	// add your custom rules here
	rules: {
		'no-extra-semi': 'off',
		indent: [2, 'tab'],
		'no-tabs': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'vue/multi-word-component-names': ['error', {
			ignores: ['Header', 'default']
		}]
	}
}
