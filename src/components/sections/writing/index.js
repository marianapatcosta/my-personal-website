import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { ArticleItem } from '../..'
import * as Icons from '../../../icons'
import { StyledSectionTitle } from '../../../themes/global-style'
import {
  NUMBER_OF_ITEMS_BIG_SCREEN,
  NUMBER_OF_ITEMS_SMALL_SCREEN,
} from '../../../constants'
import { getItemImage } from '../../../utils'
import {
  StyledWriting,
  StyledItems,
  StyledButton,
  StyledNoItems,
} from './styles'

const Writing = ({ writingInfo, pageImages }) => {
  const [itemsToDisplay, setItemsToDisplay] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isBigScreen = window.matchMedia('(min-width: 1600px)').matches
      setItemsToDisplay(
        writingInfo.slice(
          0,
          isBigScreen
            ? NUMBER_OF_ITEMS_BIG_SCREEN
            : NUMBER_OF_ITEMS_SMALL_SCREEN
        )
      )
    }
  }, [writingInfo])

  const handleMoreClick = () => navigate('/writing')

  return (
    <StyledWriting id='writing'>
      <StyledSectionTitle>Writing</StyledSectionTitle>
      <StyledNoItems>No articles to display.</StyledNoItems>
      <StyledItems>
        {itemsToDisplay.map(({ node }) => (
          <ArticleItem
            key={`article-section-${node.frontmatter.title}`}
            itemInfo={node}
            itemImage={getItemImage(node.frontmatter.image, pageImages)}
          />
        ))}
      </StyledItems>
      {writingInfo.length > itemsToDisplay.length && (
        <StyledButton
          label='more'
          icon={Icons.Plus}
          onClick={handleMoreClick}
        />
      )}
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
