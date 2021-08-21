import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { ArticleItem } from '../..'
import * as Icons from '../../../icons'
import { StyledSectionTitle } from '../../../themes/global-style'
import { getItemImage } from '../../../utils'
import { StyledWriting, StyledItems, StyledButton } from './styles'

const Writing = ({ writingInfo, pageImages }) => {
  const [itemsToDisplay, setItemsToDisplay] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBigScreen = window.matchMedia('(min-width: 1600px)').matches
      setItemsToDisplay(writingInfo.slice(0, isBigScreen ? 6 : 4))
    }
  }, [writingInfo])

  const handleMoreClick = () => navigate('/writing')

  return (
    <StyledWriting id='writing'>
      <StyledSectionTitle>Writing</StyledSectionTitle>
      <StyledItems>
        {itemsToDisplay.map(({ node }) => (
          <ArticleItem
            key={`article-section-${node.frontmatter.title}`}
            itemInfo={node}
            itemImage={getItemImage(node.frontmatter.image, pageImages)}
          />
        ))}
      </StyledItems>
      <StyledButton label='more' icon={Icons.Plus} onClick={handleMoreClick} />
    </StyledWriting>
  )
}

Writing.propTypes = {
  writingInfo: PropTypes.arrayOf(PropTypes.object),
  itemImage: PropTypes.arrayOf(PropTypes.object),
}

Writing.defaultProps = {
  writingInfo: [],
  itemImage: [],
}

export default Writing
