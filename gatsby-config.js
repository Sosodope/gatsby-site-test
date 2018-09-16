module.exports = {
  siteMetadata: {
    title: "Gatsby Test",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate esse enim necessitatibus. Unde, optio facere porro perspiciatis rerum nesciunt molestiae, veritatis modi ipsum dolor alias debitis, deserunt reiciendis minus nulla!",
    keywords: "landing page, services, products, dev shop"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "zihk3iodm4ds",
        accessToken:
          "240b30a479463b1a057cf34d001dd8f8a131b749da8964effb7d55770120b26e"
      }
    }
  ]
};
