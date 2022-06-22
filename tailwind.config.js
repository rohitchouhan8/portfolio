const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				header: ["Rubik", ...defaultTheme.fontFamily.sans],
				sans: ["Lato", ...defaultTheme.fontFamily.sans],
				title: ["Dancing Script"],
			},
			animation: {
				text: "text 5s ease-in-out infinite",
			},
			saturate: {
				125: "1.25",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
		},
	},
	plugins: [],
}
