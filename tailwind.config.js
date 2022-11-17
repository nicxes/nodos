/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
	],
  theme: {
		fontFamily: {
			'display': "'Open Sans'",
			'body': 'Poppins',
			'input': 'Inter'
		},
		borderRadius: {
			'3xl': '20px',
		},
    extend: {
			colors: {
				primary: '#35BC75',
				success: '#4DCB8E'
			}
		},
  },
  plugins: [],
}
