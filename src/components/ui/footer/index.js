import React from 'react'
import PropTypes from 'prop-types'
import { Wave } from '../../../images'

import { StyledFooter } from './styles'

const Footer = ({ authorName }) => {
  return (
    <StyledFooter>
      <img src={Wave} alt='wave svg at the footer' />
      <p>{`©${new Date().getFullYear()} - Designed and Developed by ${authorName}`}</p>
    </StyledFooter>
  )
}

Footer.propTypes = {
  authorName: PropTypes.string,
}

Footer.defaultProps = {
  authorName: '',
}

export default Footer
