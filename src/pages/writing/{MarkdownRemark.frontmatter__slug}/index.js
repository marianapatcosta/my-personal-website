import React from 'react'
import { graphql } from 'gatsby'
import RehypeReact from 'rehype-react'
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader'
import { Layout, SEO as Seo } from '../../../components'
import { formatDate } from '../../../utils'
import {
  StyledArticle,
  StyledHeader,
  StyledArticleTitle,
  StyledInfo,
  StyledTags,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledUnorderedList,
  StyledListItem,
  StyledLink,
  StyledFigCaption,
} from './styles'

deckDeckGoHighlightElement()

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    h2: StyledH2,
    h3: StyledH3,
    h4: StyledH4,
    h5: StyledH5,
    ul: StyledUnorderedList,
    li: StyledListItem,
    a: StyledLink,
    figcaption: StyledFigCaption,
  },
}).Compiler

const Article = ({ data }) => {
  const { markdownRemark } = data
  const {
    frontmatter: { title, date, tags },
    fields: { readingTime },
    htmlAst,
  } = markdownRemark

  return (
    <Layout>
      <Seo title={title} />
      <StyledArticle id='writing'>
        <StyledHeader>
          <StyledArticleTitle>{title}</StyledArticleTitle>
          <StyledTags>
            {tags?.map(tag => (
              <span key={`tag-${tag}`}>{tag}</span>
            ))}
          </StyledTags>
          <StyledInfo>
            <time dateTime={date}>{formatDate(date)}</time> ・
            <span>{readingTime.text}</span>
          </StyledInfo>
        </StyledHeader>

        {/*    <StyledImage
          image={getImage(coverImage.node)}
          alt={`${title} article cover image`}
        /> */}
        {renderAst(htmlAst)}
      </StyledArticle>
    </Layout>
  )
}

export const articlePageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      htmlAst
      excerpt(pruneLength: 200)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
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
`

export default Article
