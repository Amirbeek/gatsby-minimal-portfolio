module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/",
        manifestSettings: {
          favicon: "./content/images/favicon.ico",
          siteName: "Amirbek's Portfolio",
          shortName: "Amirbek Shomurodov",
          startUrl: "/",
          backgroundColor: "#FFFFFF",
          themeColor: "#000000",
          display: "minimal-ui",
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog",
          usePathPrefixForArticles: false,
        },
        googleAnalytics: {
            trackingId: "UA-XXXXXX-X",
            anonymize: true,
            environments: [ "development"]
        }
      },
    },
  ],
};
