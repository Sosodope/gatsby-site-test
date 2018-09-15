// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/json/404.json"),
  "index.json": require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/json/index.json"),
  "page-2.json": require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/json/page-2.json"),
  "404-html.json": require("/Users/sonamdolkarpenjore/Code/sonam/gatsby-site-test/.cache/json/404-html.json")
}