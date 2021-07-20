import React from 'react'
import { graphql } from 'gatsby'
import {
  About,
  Contacts,
  Intro,
  Layout,
  Portfolio,
  SEO as Seo,
} from '../components'

const IndexPage = ({ data: pageData }) => (
  <Layout>
    <Seo title='Mariana Costa' />
    <Intro
      authorName={pageData.site.siteMetadata?.authorName}
      authorRole={pageData.site.siteMetadata?.authorRole}
      contactsInfo={pageData.allContactsJson?.edges}
      pageImages={pageData.allFile?.edges}
    />
    <About
      aboutInfo={pageData.allAboutJson?.edges[0].node}
      pageImages={pageData.allFile?.edges}
    />
    <Portfolio
      portfolioInfo={pageData.allPortfolioJson?.edges}
      pageImages={pageData.allFile?.edges}
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
    allFile(
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
  }
`
