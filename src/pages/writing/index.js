import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Dropdown, ArticleItem, Layout, SEO as Seo } from '../../components'
import { getItemImage } from '../../utils'
import {
  StyledWriting,
  StyledWritingTitle,
  StyledItems,
  StyledTags,
  StyledTag,
  StyledNoItems,
  StyledDropdownWrapper,
} from './styles'

const tags = [
  'Web',
  'Mobile',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'React Native',
  'Ionic',
]

const DEFAULT_TAG = 'All'

const Writing = () => {
  const writingData = useStaticQuery(graphql`
    query WritingPageQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt(pruneLength: 200)
            html
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
      images: allFile(
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
  `)

  const writingInfo = writingData.allMarkdownRemark?.edges
  const pageImages = writingData.images?.edges
  const [selectedTags, setSelectedTags] = useState([DEFAULT_TAG])
  const [filteredWritingInfo, setFilteredWritingInfo] = useState(writingInfo)

  const handleTagClick = clickedTag => {
    if (clickedTag === DEFAULT_TAG) {
      return setSelectedTags([DEFAULT_TAG])
    }

    if (selectedTags.includes(clickedTag)) {
      // if user clicks to unselect the only selected tag, 'All' is setted as selectedTag
      if (selectedTags.length === 1) {
        return setSelectedTags([DEFAULT_TAG])
      }
      return setSelectedTags(prevTags =>
        prevTags.filter(tag => tag !== clickedTag && tag !== DEFAULT_TAG)
      )
    }

    setSelectedTags(prevTags => [
      ...prevTags.filter(tag => tag !== DEFAULT_TAG),
      clickedTag,
    ])
  }

  useEffect(() => {
    if (selectedTags.includes(DEFAULT_TAG)) {
      return setFilteredWritingInfo(writingInfo)
    }
    setFilteredWritingInfo(
      writingInfo.filter(({ node: { frontmatter: { tags } } }) =>
        selectedTags.every(selectedTag => tags.includes(selectedTag))
      )
    )
  }, [selectedTags, writingInfo])

  return (
    <Layout>
      <Seo title='Writing' />
      <StyledWriting id='writing'>
        <StyledWritingTitle>Writing</StyledWritingTitle>
        {/*    <StyledDropdownWrapper>
          <Dropdown
            selectedOptions={selectedTags}
            placeholder='Filter by...'
            options={[DEFAULT_TAG, ...tags]}
            onOptionClick={handleTagClick}
          />
        </StyledDropdownWrapper>
        <StyledTags>
          {[DEFAULT_TAG, ...tags].map(technology => (
            <StyledTag
              key={`technology-filter-${technology}`}
              label={technology}
              isActive={selectedTags.includes(technology)}
              aria-label={`click to filter articles using ${technology}`}
              onClick={() => handleTagClick(technology)}
            />
          ))}
        </StyledTags> */}
        {!!filteredWritingInfo?.length ? (
          <StyledItems>
            {filteredWritingInfo.map(({ node }) => (
              <ArticleItem
                key={`article-${node.frontmatter.title}`}
                itemInfo={node}
                itemImage={getItemImage(node.frontmatter.image, pageImages)}
              />
            ))}
          </StyledItems>
        ) : (
          <StyledNoItems>
            No articles to display. Please change the selected filters.
          </StyledNoItems>
        )}
      </StyledWriting>
    </Layout>
  )
}

export default Writing
