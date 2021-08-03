module.exports = {
  siteMetadata: {
    siteUrl: `https://code-star.github.io`,
    title: "Codestar",
  },
  plugins: [
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
