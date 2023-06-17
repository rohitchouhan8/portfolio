/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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
				header: ["var(--font-rubik)", ...defaultTheme.fontFamily.sans],
				sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
				title: ["var(--font-brick)"],
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
