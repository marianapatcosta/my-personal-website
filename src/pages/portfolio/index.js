import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Dropdown, PortfolioItem, Layout, SEO as Seo } from '../../components'
import { getItemImages } from '../../utils'
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
  'Next',
  'Ionic',
  'Django',
  'Game',
  'Tests'
]

const DEFAULT_TAG = 'All'

const Portfolio = () => {
  const portfolioData = useStaticQuery(graphql`
    query PortfolioPageQuery {
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
    }
  `)

  const portfolioInfo = portfolioData.allPortfolioJson?.edges
  const pageImages = portfolioData.images?.edges
  const [selectedTags, setSelectedTags] = useState([DEFAULT_TAG])
  const [filteredPortfolioInfo, setFilteredPortfolioInfo] = useState(
    portfolioInfo
  )

  const handleTagClick = clickedTag => {
    if (clickedTag === DEFAULT_TAG) {
      return setSelectedTags([DEFAULT_TAG])
    }

    if (selectedTags.includes(clickedTag)) {
      // if user clicks to unselect the only selected tag, 'All' is set as selectedTag
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
                itemImages={getItemImages(itemInfo.images, pageImages)}
              />
            ))}
          </StyledItems>
        ) : (
          <StyledNoItems>
            No projects to display. Please change the selected filters.
          </StyledNoItems>
        )}
      </StyledPortfolio>
    </Layout>
  )
}

export default Portfolio
