import type { GatsbyConfig } from "gatsby"

require("dotenv").config({
	path: `.env`,
})

const config: GatsbyConfig = {
	siteMetadata: {
		title: `Rohit Chouhan`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	pathPrefix: `/`,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-postcss",
		`gatsby-plugin-preload-fonts`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `jlhsoern2p9i`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`rubik\:100,200,300,400,500,600,700,800,900`,
					`lato\:100,200,300,400,500,600,700,800,900`,
				],
				display: "swap",
			},
		},
	],
}

export default config
