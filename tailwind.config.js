const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				header: ["Rubik", ...defaultTheme.fontFamily.sans],
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
