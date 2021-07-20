import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import {
  StyledInput,
  StyledInputField,
  StyledLabel,
  StyledInputIcon,
  StyledInputError,
} from './StyledInput'

const Input = forwardRef(
  ({ id, label, errorText, icon, iconText, ...props }, ref) => (
    <StyledLabel>
      {!!label && <span>{label}</span>}
      <StyledInputField>
        <StyledInput id={id} errorText={errorText} {...props} ref={ref} />
        {icon && <StyledInputIcon alt={iconText} src={icon} />}
      </StyledInputField>
      {!!errorText && <StyledInputError>{errorText}</StyledInputError>}
    </StyledLabel>
  )
)

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  icon: PropTypes.string,
  iconText: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  id: '',
  label: '',
  className: '',
  disabled: false,
  type: 'text',
  autoComplete: 'off',
  placeholder: '',
  errorText: '',
  icon: '',
  iconText: '',
  maxLength: 100,
  onChange: () => null,
  onBlur: () => null,
}

export default Input
