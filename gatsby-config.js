/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		{
	    resolve: `gatsby-plugin-sharp`,
	    options: {
	      useMozJpeg: false,
	      stripMetadata: true,
	      defaultQuality: 75,
	    },
	  },
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
				path: `${__dirname}/src/images/`,
			},
		},
		{
		resolve: `gatsby-plugin-mdx`,
		options: {
			remarkPlugins: [require(`remark-math`)],
    	rehypePlugins: [require(`rehype-katex`)],
			defaultLayouts: {
				default: require.resolve(`./src/components/layout.jsx`),
			},
			extensions: [`.mdx`, `.md`],
			plugins: [`gatsby-remark-images`],
			gatsbyRemarkPlugins: [
				  {
				    resolve: `gatsby-remark-prismjs`,
				    options: {
				      classPrefix: 'language-',
				      inlineCodeMarker: null
				    }
				  },
				  {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
				]
			},
		},
	],
}