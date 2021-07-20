import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledImageOverlay, StyledImage } from './styles'
import { isEventValid } from '../../utils'

const SlideImage = ({ isSelected, ...otherProps }) => {
  const [isZoomedIn, setIsZoomedIn] = useState(false)
  const [wasImageClicked, setWasImageClicked] = useState(false)

  const handleImageClick = event => {
    if (!isEventValid(event)) return
    setIsZoomedIn(prevIsZoomedIn => !prevIsZoomedIn)
    setWasImageClicked(prevWasImageClicked => !prevWasImageClicked)
  }

  useEffect(() => {
    if (isZoomedIn) {
      document.documentElement.style.overflow = 'hidden'
      return
    }

    document.documentElement.style.overflow = 'scroll'
  }, [isZoomedIn])

  return (
    <StyledImageOverlay $isZoomedIn={isZoomedIn} onClick={handleImageClick}>
      <StyledImage
        tabIndex={0}
        role='button'
        {...otherProps}
        $isSelected={isSelected}
        $isZoomedIn={isZoomedIn}
        $wasImageClicked={wasImageClicked}
        onClick={handleImageClick}
        onKeyDown={handleImageClick}
      />
    </StyledImageOverlay>
  )
}

SlideImage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object,
  imgStyle: PropTypes.object,
  isSelected: PropTypes.bool,
}

SlideImage.defaultProps = {
  id: '',
  className: '',
  image: null,
  imgStyle: null,
  isSelected: false,
}

export default SlideImage
