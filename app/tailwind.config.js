/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')

const conf = {
  theme: {},
  variants: {},
  plugins: []
}

conf.theme.colors = {
	...colors,
	white: '#E6ECF0',
	bt: '#3E3E56',
	grey: '#c3ccd8',
	txt: '#2d3748',
	cleartext: '#718096'
}

module.exports = conf