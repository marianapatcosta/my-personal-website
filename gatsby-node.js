exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
      type MarkdownRemark implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        tags: [String!]!
      }
      type Frontmatter {
        featuredImage: File!
      }
    `
  createTypes(typeDefs)
}
