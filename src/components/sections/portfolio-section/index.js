import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { PortfolioItem } from '../..'
import * as Icons from '../../../icons'
import { StyledSectionTitle } from '../../../themes/global-style'
import { getItemImages } from '../../../utils'
import { StyledPortfolio, StyledItems, StyledButton } from './styles'

const PortfolioSection = ({ portfolioInfo, pageImages }) => {
  const [itemsToDisplay, setItemsToDisplay] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBigScreen = window.matchMedia('(min-width: 1600px)').matches
      setItemsToDisplay(portfolioInfo.slice(0, isBigScreen ? 6 : 4))
    }
  }, [portfolioInfo])

  const handleMoreClick = () => navigate('/portfolio')

  return (
    <StyledPortfolio id='portfolio'>
      <StyledSectionTitle>Portfolio</StyledSectionTitle>
      <StyledItems>
        {itemsToDisplay.map(({ node: itemInfo }) => (
          <PortfolioItem
            key={`portfolio-item-${itemInfo.title}`}
            itemInfo={itemInfo}
            itemImages={getItemImages(itemInfo.images, pageImages)}
          />
        ))}
      </StyledItems>
      <StyledButton label='more' icon={Icons.Plus} onClick={handleMoreClick} />
    </StyledPortfolio>
  )
}

PortfolioSection.propTypes = {
  portfolioInfo: PropTypes.arrayOf(PropTypes.object),
  pageImages: PropTypes.arrayOf(PropTypes.object),
}

PortfolioSection.defaultProps = {
  portfolioInfo: [],
  pageImages: [],
}

export default PortfolioSection