module.exports = {
  siteMetadata: {
    siteUrl: "https://protonwebmaster.fr",
    title: "protonft",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://protonwebmaster.fr/graphql",
      },
    },
    "gatsby-plugin-sitemap",
  ],
};
