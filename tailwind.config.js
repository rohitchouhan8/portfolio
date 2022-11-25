const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				black: "#080d17",
				gray: colors.slate,
				highlight: {
					light: "#000",
					dark: "#031b47",
				},
			},
			fontFamily: {
				header: ["Rubik", ...defaultTheme.fontFamily.sans],
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				title: ["Dancing Script"],
			},
			animation: {
				text: "text 30s ease-in-out infinite",
			},
			saturate: {
				125: "1.25",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "400% 100%",
						"background-position": "left top",
					},
					"50%": {
						"background-size": "400% 100%",
						"background-position": "right bottom",
					},
				},
			},
		},
	},
	plugins: [],
}
