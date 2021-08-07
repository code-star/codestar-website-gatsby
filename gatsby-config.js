module.exports = {
  pathPrefix: `/codestar-website-gatsby`,
  siteMetadata: {
    siteUrl: `https://code-star.github.io`,
    title: "Codestar",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
