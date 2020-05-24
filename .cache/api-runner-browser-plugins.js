module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/djaimes/davidjaimes.github.io.source.code/node_modules/gatsby-remark-images","id":"3626c0e0-58d4-5046-b0e5-cb7731a052f2","name":"gatsby-remark-images","version":"3.3.8","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"remarkPlugins":[null],"rehypePlugins":[null],"defaultLayouts":{"default":"/Users/djaimes/davidjaimes.github.io.source.code/src/components/layout.jsx"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null}},{"resolve":"gatsby-remark-images","options":{"maxWidth":800}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
