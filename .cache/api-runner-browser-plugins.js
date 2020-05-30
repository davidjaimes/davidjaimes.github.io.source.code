module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"src/images/favicon.png","name":"David Jaimes","short_name":"djaimes","description":"Husband, Scientist, and Trail Runner.","lang":"en","start_url":"/","display":"standalone","theme_color":"#fff","background_color":"#fff","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"31e1c5582d361fd5209c883ca36ae646"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[{"resolve":"/Users/djaimes/davidjaimes.github.io.source.code/node_modules/gatsby-remark-images","id":"3626c0e0-58d4-5046-b0e5-cb7731a052f2","name":"gatsby-remark-images","version":"3.3.8","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"remarkPlugins":[null],"rehypePlugins":[null],"defaultLayouts":{"default":"/Users/djaimes/davidjaimes.github.io.source.code/src/components/layout.jsx"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null}},{"resolve":"gatsby-remark-images","options":{"maxWidth":800}}]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
