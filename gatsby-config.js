module.exports = {
  siteMetadata: {
    siteTitle: `Deno - A book`,
    defaultTitle: `Deno - A book`,
    siteTitleShort: `Deno-book`,
    siteDescription: `A book about deno`,
    siteUrl: `https://deno.books.paperplane.ml`,
    siteAuthor: `@gargakshit`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Deno - A book`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/book`,
        githubUrl: `https://github.com/gargakshit/deno-book`,
        baseDir: `/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://deno.books.paperplane.ml`,
      },
    },
  ],
};
