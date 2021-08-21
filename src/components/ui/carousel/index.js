import React, { useEffect, useRef, useState } from 'react'
import { getImage } from 'gatsby-plugin-image'
import PropTypes from 'prop-types'
import { Chevron } from '../../../icons'
import { ORIENTATION } from '../../../constants'
import { SlideImage } from '../..'
import {
  StyledCarousel,
  StyledCarouselHeader,
  StyledCarouselContent,
  StyledChevron,
  StyledImageWrapper,
  StyledIndicatorBar,
  StyledIndicatorBarItem,
  StyledButton,
} from './styles'

const Carousel = ({
  header,
  imageAltLabel,
  items,
  className,
  imageOrientation,
  automaticModeOn,
}) => {
  const [presentingItemIndex, setPresentingItemIndex] = useState(0)
  const [isAutomaticView, setIsAutomaticView] = useState(automaticModeOn)
  const chevronRef = useRef()
  const hasMultipleImages = items.length > 1

  useEffect(() => {
    let interval
    if (isAutomaticView) {
      interval = setInterval(() => chevronRef.current.click(), 2500)
    }
    return () => clearInterval(interval)
  }, [isAutomaticView])

  const handleNextItemClick = () => {
    setPresentingItemIndex(prevPresentingItem =>
      presentingItemIndex === items.length - 1 ? 0 : prevPresentingItem + 1
    )
  }

  const handlePreviousItemClick = () => {
    setPresentingItemIndex(prevActive =>
      presentingItemIndex === 0 ? items.length - 1 : prevActive - 1
    )
  }

  const toggleIsAutomaticView = () => {
    setIsAutomaticView(prevIsAutomaticView => !prevIsAutomaticView)
  }

  return (
    <StyledCarousel className={className}>
      {!!header && <StyledCarouselHeader>{header}</StyledCarouselHeader>}
      <StyledCarouselContent
        isVertical={imageOrientation === ORIENTATION.VERTICAL}
      >
        {hasMultipleImages && (
          <StyledChevron
            role='button'
            tabIndex={0}
            isLeftChevron
            isAutomaticView={isAutomaticView}
            src={Chevron}
            alt='left chevron'
            onClick={handlePreviousItemClick}
          />
        )}
        <StyledImageWrapper>
          {items.map((item, index) => (
            <SlideImage
              key={`slide-image-${index}`}
              imgStyle={{
                objectFit: 'fill',
              }}
              image={getImage(item.node)}
              isSelected={presentingItemIndex === index}
              alt={`${imageAltLabel || header} -  selected image`}
            />
          ))}
        </StyledImageWrapper>

        {hasMultipleImages && (
          <StyledChevron
            role='button'
            tabIndex={0}
            isAutomaticView={isAutomaticView}
            ref={chevronRef}
            src={Chevron}
            alt='right chevron'
            onClick={handleNextItemClick}
          />
        )}

        {hasMultipleImages && (
          <StyledIndicatorBar>
            {items.map((item, index) => (
              <StyledIndicatorBarItem
                key={`carousel-item-${index}`}
                isFilled={index <= presentingItemIndex}
              />
            ))}
            <StyledButton
              aria-label='turn on/off automatic view of slider images'
              isAutomaticView={isAutomaticView}
              onClick={toggleIsAutomaticView}
            >
              <div />
            </StyledButton>
          </StyledIndicatorBar>
        )}
      </StyledCarouselContent>
    </StyledCarousel>
  )
}

Carousel.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array,
  className: PropTypes.string,
  imageOrientation: PropTypes.string,
  isAutomaticView: PropTypes.bool,
}

Carousel.defaultProps = {
  header: '',
  items: [],
  className: '',
  imageOrientation: ORIENTATION.LANDSCAPE,
  isAutomaticView: false,
}

export default Carousel
