module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project-pages`,
        path: `${__dirname}/src/project-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
