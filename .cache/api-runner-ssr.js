var plugins = [{
      plugin: require('/Users/djaimes/davidjaimes.github.io.source.code/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"icon":"src/images/favicon.png","name":"David Jaimes","short_name":"djaimes","description":"Husband, Scientist, and Trail Runner.","lang":"en","start_url":"/","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"31e1c5582d361fd5209c883ca36ae646"},
    },{
      plugin: require('/Users/djaimes/davidjaimes.github.io.source.code/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[{"resolve":"/Users/djaimes/davidjaimes.github.io.source.code/node_modules/gatsby-remark-images","id":"3626c0e0-58d4-5046-b0e5-cb7731a052f2","name":"gatsby-remark-images","version":"3.3.8","pluginOptions":{"plugins":[]},"nodeAPIs":[],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"remarkPlugins":[null],"rehypePlugins":[null],"defaultLayouts":{"default":"/Users/djaimes/davidjaimes.github.io.source.code/src/components/layout.jsx"},"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-prismjs","options":{"classPrefix":"language-","inlineCodeMarker":null}},{"resolve":"gatsby-remark-images","options":{"maxWidth":800}}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
