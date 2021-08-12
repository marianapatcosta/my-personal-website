module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: `Personal portfolio that compiles some personal projects of software development.`,
    author: `@marianapatcosta`,
    authorName: `Mariana Costa`,
    authorRole: `Software Developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/site-content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `public/exports`,
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
        duration: 500,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/logo.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cardo`],
        display: 'swap',
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-pdf',
      options: {
        paths: ['/resume/'],
        styleTagOptions: {
          content:
            'header { display:none !important; } footer { display:none !important; }',
          format: 'A4',
          printBackground: true,
          preferCSSPageSize: true,
        },
      },
    },
    {
      // only added to exclude styles.js files in pages folder, to aavoid build error
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
        ignore: ['**/styles.js', '**/styles.jsx'],
      },
    },
  ],
}
