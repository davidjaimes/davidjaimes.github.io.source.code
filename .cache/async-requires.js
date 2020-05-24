// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-index-mdx": () => import("./../src/pages/about/index.mdx" /* webpackChunkName: "component---src-pages-about-index-mdx" */),
  "component---src-pages-index-mdx": () => import("./../src/pages/index.mdx" /* webpackChunkName: "component---src-pages-index-mdx" */),
  "component---src-pages-jskycalc-index-mdx": () => import("./../src/pages/jskycalc/index.mdx" /* webpackChunkName: "component---src-pages-jskycalc-index-mdx" */),
  "component---src-pages-legal-index-mdx": () => import("./../src/pages/legal/index.mdx" /* webpackChunkName: "component---src-pages-legal-index-mdx" */),
  "component---src-pages-linear-regression-index-mdx": () => import("./../src/pages/linear-regression/index.mdx" /* webpackChunkName: "component---src-pages-linear-regression-index-mdx" */),
  "component---src-pages-mac-os-config-index-mdx": () => import("./../src/pages/macOS-config/index.mdx" /* webpackChunkName: "component---src-pages-mac-os-config-index-mdx" */)
}

