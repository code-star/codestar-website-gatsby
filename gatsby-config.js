module.exports = {
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
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
