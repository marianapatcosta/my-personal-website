import React from 'react'
import { graphql } from 'gatsby'
import {
  About,
  Contacts,
  Intro,
  Layout,
  PortfolioSection,
  SEO as Seo,
  Writing,
} from '../components'

const IndexPage = ({ data: pageData }) => (
  <Layout>
    <Seo title='Mariana Costa' />
    <Intro
      authorName={pageData.site.siteMetadata?.authorName}
      authorRole={pageData.site.siteMetadata?.authorRole}
      contactsInfo={pageData.allContactsJson?.edges}
      pageImages={pageData.generalImages?.edges}
    />
    <About
      aboutInfo={pageData.allAboutJson?.edges[0].node}
      pageImages={pageData.generalImages?.edges}
    />
    <PortfolioSection
      portfolioInfo={pageData.allPortfolioJson?.edges}
      pageImages={pageData.portfolioImages?.edges}
    />
    <Writing
      writingInfo={pageData.allMarkdownRemark?.edges}
      pageImages={pageData.articlesImages?.edges}
    />
    <Contacts contactsInfo={pageData.allContactsJson?.edges} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        authorName
        authorRole
      }
    }
    allAboutJson {
      edges {
        node {
          aboutMe
          profileImage
          skills {
            label
            icon
          }
          onRadar {
            label
            icon
          }
          otherInterests {
            label
            icon
          }
        }
      }
    }
    allPortfolioJson {
      edges {
        node {
          title
          description
          images
          stack {
            label
            icon
          }
          links {
            label
            icon
            url
          }
        }
      }
    }
    allContactsJson {
      edges {
        node {
          label
          icon
          url
        }
      }
    }
    generalImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
    portfolioImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "portfolio" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
    articlesImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "articles" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          excerpt(pruneLength: 200)
          headings {
            depth
            value
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            image
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
            tags
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
