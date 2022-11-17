export default {
	target: 'static', // default is 'server'
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s - Nodos',
		htmlAttrs: {
			lang: 'es'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'robots', content: 'noindex' },
			{ name: 'googlebot', content: 'noindex' }
		],
		link: [
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap' },
		]
	},
	css: [
		'@/assets/css/main.css',
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: [
		'~/components',
		{ prefix: 'v-', path: '~/components/ui' }
	],
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://github.com/nuxt/postcss8
		'@nuxt/postcss8',
		// https://github.com/nuxt-community/svg-module
		'@nuxtjs/svg'
	],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios'
	],
	loadingIndicator: {
		color: '#35BC75'
	},
	// Google Fonts configurations
	googleFonts: {
		families: {
			'Open+Sans': [400, 500, 600],
			Poppins: [400, 500, 600],
			Inter: [400, 500, 600]
		}
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		}
	}
}
