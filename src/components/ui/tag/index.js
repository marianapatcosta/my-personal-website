import React from 'react'
import PropTypes from 'prop-types'
import { StyledTag } from './styles'

const Tag = ({ label, isActive, ...props }) => (
  <StyledTag $isActive={isActive} {...props}>
    <span>{label}</span>
  </StyledTag>
)

Tag.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

Tag.defaultProps = {
  id: '',
  label: '',
  className: '',
  disabled: false,
  isActive: false,
  onClick: () => null,
}

export default Tag
