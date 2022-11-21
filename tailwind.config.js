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
			},
			fontFamily: {
				header: ["Rubik", ...defaultTheme.fontFamily.sans],
				sans: ["Lato", ...defaultTheme.fontFamily.sans],
				title: ["Dancing Script"],
			},
			animation: {
				text: "text 15s ease-in-out infinite",
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
