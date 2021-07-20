import React from 'react'
import PropTypes from 'prop-types'
import { StyledTooltip } from './StyledTooltip'

const Tooltip = ({ label, ...props }) => (
  <StyledTooltip {...props}> {label}</StyledTooltip>
)

Tooltip.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}

Tooltip.defaultProps = {
  id: '',
  label: '',
}

export default Tooltip
