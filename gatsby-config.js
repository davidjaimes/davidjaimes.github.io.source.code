/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				defaultLayouts: {
					default: require.resolve(`./src/components/layout.jsx`),
				},
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
			      {
			        resolve: `gatsby-remark-prismjs`,
			        options: {
			          classPrefix: 'language-',
			          inlineCodeMarker: null
			        }
			      }
			    ]
			},
		},
	],
}