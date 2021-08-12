import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Dropdown, PortfolioItem, Layout, SEO as Seo } from '../../components'
import {
  StyledPortfolio,
  StyledPortfolioTitle,
  StyledItems,
  StyledTags,
  StyledTag,
  StyledNoItems,
  StyledDropdownWrapper,
} from './styles'

const mainTechnologies = [
  'Web',
  'Mobile',
  'Desktop',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'React Native',
  'Styled Components',
  'Electron',
  'NodeJS',
  'Gatsby',
  'Ionic',
  'Django',
]

const DEFAULT_TAG = 'All'

const Portfolio = () => {
  const portfolioData = useStaticQuery(graphql`
    query PortfolioPageQuery {
      site {
        siteMetadata {
          title
          authorName
          authorRole
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
      images: allFile(
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
  `)

  const portfolioInfo = portfolioData.allPortfolioJson?.edges
  const pageImages = portfolioData.images?.edges
  const [selectedTags, setSelectedTags] = useState([DEFAULT_TAG])
  const [filteredPortfolioInfo, setFilteredPortfolioInfo] = useState(
    portfolioInfo
  )

  const getItemImages = images =>
    pageImages
      .filter(image => images.includes(image.node.base))
      .sort((imageA, imageB) => (imageA.node.base < imageB.node.base ? -1 : 1))

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
      return setFilteredPortfolioInfo(portfolioInfo)
    }
    setFilteredPortfolioInfo(
      portfolioInfo.filter(({ node: { stack } }) =>
        selectedTags.every(tag => stack.map(({ label }) => label).includes(tag))
      )
    )
  }, [selectedTags, portfolioInfo])

  return (
    <Layout>
      <Seo title='Portfolio' />
      <StyledPortfolio id='portfolio'>
        <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
        <StyledDropdownWrapper>
          <Dropdown
            selectedOptions={selectedTags}
            placeholder='Filter by...'
            options={[DEFAULT_TAG, ...mainTechnologies]}
            onOptionClick={handleTagClick}
          />
        </StyledDropdownWrapper>

        <StyledTags>
          {[DEFAULT_TAG, ...mainTechnologies].map(technology => (
            <StyledTag
              key={`technology-filter-${technology}`}
              label={technology}
              isActive={selectedTags.includes(technology)}
              aria-label={`click to filter projects using ${technology}`}
              onClick={() => handleTagClick(technology)}
            />
          ))}
        </StyledTags>
        {!!filteredPortfolioInfo.length ? (
          <StyledItems>
            {filteredPortfolioInfo.map(({ node: itemInfo }) => (
              <PortfolioItem
                key={`portfolio-item-${itemInfo.title}`}
                itemInfo={itemInfo}
                itemImages={getItemImages(itemInfo.images)}
              />
            ))}
          </StyledItems>
        ) : (
          <StyledNoItems>
            No items to display. Please change the selected filters.
          </StyledNoItems>
        )}
      </StyledPortfolio>
    </Layout>
  )
}

Portfolio.propTypes = {
  portfolioInfo: PropTypes.arrayOf(PropTypes.object),
  pageImages: PropTypes.arrayOf(PropTypes.object),
}

Portfolio.defaultProps = {
  portfolioInfo: [],
  pageImages: [],
}

export default Portfolio
