import { Project } from "./src/pages/projects"

const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
	reporter.info(`Your Gatsby site has been built!`)
}

// Create project pages dynamically
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const { data } = await graphql(`
		{
			allContentfulWork {
				nodes {
					endDate
					startDate
					id
					name
					content {
						raw
					}
				}
			}
		}
	`)

	data.allContentfulWork.nodes.forEach((work: Project) => {
		createPage({
			path: `/projects/${work.id}`,
			component: path.resolve(`./src/templates/ProjectTemplate.tsx`),
			context: work,
		})
	})
}
