module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://amirbekshomurodov.me",
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
            trackingId: "G-4YZM8DLBK1",
            anonymize: true,
            environments: [ "development"]
        }
      },
    },
  ],
};
