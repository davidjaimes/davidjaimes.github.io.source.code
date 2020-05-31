const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/about/index.mdx"))),
  "component---src-pages-eclipsing-binaries-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/eclipsing-binaries/index.mdx"))),
  "component---src-pages-gatsby-config-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/gatsby-config/index.mdx"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/index.mdx"))),
  "component---src-pages-jskycalc-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/jskycalc/index.mdx"))),
  "component---src-pages-legal-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/legal/index.mdx"))),
  "component---src-pages-linear-regression-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/linear-regression/index.mdx"))),
  "component---src-pages-mac-os-config-index-mdx": hot(preferDefault(require("/Users/djaimes/davidjaimes.github.io.source.code/src/pages/macOS-config/index.mdx")))
}

