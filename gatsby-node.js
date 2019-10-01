const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      blogs: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.blogs.edges.forEach(({ node }) => {
    return createPage({
      path: `blogs/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
