module.exports = {
  siteMetadata: {
    title: "page-name",
    titleTemplate: "page-name template",
    author: 'Aniela Katana-Matłok',
    // siteUrl: 'https://ngnails.pl',
    description: "page-name",
    url: "https://anielakm.pl", // No trailing slash allowed!
    image: "/images/logo.png", // Path to your image you placed in the 'static' folder
    // twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },

    //dodatkowe wtyczki 

    `gatsby-plugin-sitemap`, //do tej wtyczki wymagane jest siteURL


    {
      resolve: "gatsby-source-wordpress",
      options: {
        // your WordPress source
        baseUrl: `ngnails.pl/`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true


      }

    },

    `gatsby-plugin-styled-components`,


    //google fonts
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lato']
        }
      }
    },




  ],
}
