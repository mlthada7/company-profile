/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['index.html'],
	theme: {
		container: {
			center: true,
			// padding: '16px',
		},
		extend: {
			colors: {
				'primary-blue': '#1e44ad',
				'primary-blue-light': '#3e64bb',
				'primary-blue-dark': '#0E4470',
				'primary-red': '#f44c44',
				secondary: '#cbd5e1',
				trans: '#00000080',
			},
			backgroundImage: {
				hero: "url('dist/img/andy-li-unsplash.jpg')",
				map: "url('dist/img/indonesia.png')",
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	// daisyUI config (optional)
	daisyui: {
		darkTheme: 'light',
	},
};
