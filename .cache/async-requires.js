// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-mdx": () => import("./../src/pages/index.mdx" /* webpackChunkName: "component---src-pages-index-mdx" */)
}

