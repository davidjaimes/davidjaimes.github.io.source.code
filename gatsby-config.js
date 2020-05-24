/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/`,
			},
		},
		{
	    resolve: `gatsby-source-filesystem`,
	    options: {
	      name: `images`,
	      path: `${__dirname}/src/images`,
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
		`gatsby-plugin-sharp`,
		{
	    resolve: `gatsby-transformer-remark`,
	    options: {
	      plugins: [
	      	`gatsby-remark-relative-images`,
	        {
	          resolve: `gatsby-remark-images`,
	          options: {
	            // It's important to specify the maxWidth (in pixels) of
	            // the content container as this plugin uses this as the
	            // base for generating different widths of each image.
	            maxWidth: 590,
	          },
	        },
	      ],
	    },
	  },
	],
}