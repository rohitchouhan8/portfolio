const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Your Gatsby site has been built!`)
}

// Create medium article pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const result = await graphql(`
		{
			allContentfulMediumArticles {
				totalCount
				nodes {
					title
					publishDate
					url
					id
				}
			}
		}
	`)
	console.log(result)
}
