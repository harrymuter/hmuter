module.exports = {
  siteMetadata: {
    title: `Harry Muter | PhD Researcher | UEA`,
    description: `A personal webiste for sharing my thoughts, experiences and work. All views are my own. This website is not associated to the University of East Anglia.`,
    author: `Harry Muter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
