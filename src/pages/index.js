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
      introImages={pageData.introImages?.edges}
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
    introImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "intro" }
      }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE)
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
  }
`
