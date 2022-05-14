const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	css: [
		'@/assets/css/main.css'
	],
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}'
	],
	theme: {
		extend: {
			fontFamily:
      {
      	sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      	poppins: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
		}
	},
	plugins: []
}
