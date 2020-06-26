/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const queryAll = require(`./src/queries/queryAll.js`)
const createPaginatedPages = require("gatsby-paginate")

exports.createPages = ({ graphql, boundActionCreators }) => {

	const { createPage } = boundActionCreators;

	return new Promise((resolve, reject) => {

		// Templates
		const postTemplate = path.resolve("./src/templates/post.js");
		const perPage = 6; //posts per page

		resolve(
			graphql(queryAll).then(result => {
				if (result.errors) reject(result.errors)

				// Posts detail
				const posts = result.data.allWordpressPost.edges

				createPaginatedPages({
					edges: posts,
					createPage: createPage,
					pageTemplate: "src/templates/post-listing.js",
					pageLength: perPage,
					pathPrefix: "blog"

				})


				posts.forEach(edge => {
					createPage({
						path: `/${edge.node.slug}/`,
						component: slash(postTemplate),
						context: {
							id: edge.node.id,
						},
					});
				})



			})
		)
	});
};