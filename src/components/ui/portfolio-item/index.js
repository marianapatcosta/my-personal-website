import React from 'react'
import PropTypes from 'prop-types'
import Carousel from '../carousel'
import Link from '../link'
import * as Icons from '../../../icons'
import {
  StyledItem,
  StyledItemTitle,
  StyledItemDescription,
  StyledStack,
  StyledTooltip,
  StyledLinks,
} from './styles'

const PortfolioItem = ({ itemInfo, itemImages }) => {
  const { title, description, stack, links } = itemInfo

  return (
    <StyledItem key={`portfolio-${title}`}>
      <StyledItemTitle>{title}</StyledItemTitle>
      <StyledItemDescription>{description}</StyledItemDescription>
      <Carousel items={itemImages} imageAltLabel={title} />
      <StyledStack>
        {stack.map(
          ({ label, icon }) =>
            !!icon && (
              <span key={`stack-${label}`}>
                <img src={Icons[icon]} alt={`${label} icon`} />
                <StyledTooltip label={label} />
              </span>
            )
        )}
      </StyledStack>
      <StyledLinks>
        {links.map(({ label, icon, url }) => (
          <Link
            key={`link-to-${title}-${label}`}
            url={url || '#'}
            disabled={!url}
            label={label}
            icon={Icons[icon]}
            target='_blank'
            rel='nofollow noopener noreferrer'
            aria-label='check the code of this project'
          />
        ))}
      </StyledLinks>
    </StyledItem>
  )
}

PortfolioItem.propTypes = {
  itemImages: PropTypes.arrayOf(Object),
  itemInfo: PropTypes.object,
}

PortfolioItem.defaultProps = {
  itemImages: [],
  itemInfo: {},
}

export default PortfolioItem

