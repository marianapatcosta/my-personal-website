import React from 'react'
import PropTypes from 'prop-types'
import { StyledLink } from './styles'

const Link = ({ label, icon, url, ...props }) => (
  <StyledLink
    href={url}
    target='_blank'
    rel='nofollow noopener noreferrer'
    aria-label={`click to visit ${url}`}
    {...props}
  >
    {icon && <img src={icon} alt={`${label} icon`} />}
    {label && <span>{label}</span>}
  </StyledLink>
)

Link.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  url: PropTypes.string,
}

Link.defaultProps = {
  id: '',
  label: '',
  className: '',
  disabled: false,
  icon: '',
  url: '',
}

export default Link
