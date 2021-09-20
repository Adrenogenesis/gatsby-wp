module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
