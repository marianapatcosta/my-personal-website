import React from 'react'
import PropTypes from 'prop-types'
import { getImage } from 'gatsby-plugin-image'
import { formatDate } from '../../../utils'
import {
  StyledItem,
  StyledItemTitle,
  StyledInfo,
  StyledItemSummary,
  StyledImage,
  StyledTags,
  StyledReadMore,
} from './styles'

const ArticleItem = ({ itemInfo, itemImage }) => {
  const {
    excerpt,
    frontmatter: { title, date, slug, tags },
    fields: { readingTime },
  } = itemInfo

  return (
    <StyledItem key={`article-${title}`}>
      <StyledItemTitle>{title}</StyledItemTitle>
      <StyledInfo>
        <time dateTime={date}>{formatDate(date)}</time> ・
        <span>{readingTime.text}</span>
      </StyledInfo>
      <StyledItemSummary>{excerpt}</StyledItemSummary>
      <StyledImage
        image={getImage(itemImage.node)}
        alt={`${title} article cover image`}
      />
      {/* // not working <StaticImage src={featuredImage} /> */}
      <StyledTags>
        {tags?.map(tag => (
          <span key={`tag-${tag}`}>{tag}</span>
        ))}
      </StyledTags>
      <StyledReadMore to={`/writing${slug}`}>Read More</StyledReadMore>
    </StyledItem>
  )
}

ArticleItem.propTypes = {
  itemImage: PropTypes.object,
  itemInfo: PropTypes.object,
}

ArticleItem.defaultProps = {
  itemImage: {},
  itemInfo: {},
}

export default ArticleItem
