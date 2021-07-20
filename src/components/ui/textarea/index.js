import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import {
  StyledTextareaWrapper,
  StyledTextarea,
  StyledLabel,
  StyledTextareaError,
} from './StyledTextarea'

const Textarea = forwardRef(({ id, label, errorText, ...props }, ref) => (
  <StyledTextareaWrapper>
    {!!label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
    <StyledTextarea id={id} errorText={errorText} {...props} ref={ref} />
    {!!errorText && <StyledTextareaError>{errorText}</StyledTextareaError>}
  </StyledTextareaWrapper>
))

Textarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  errorText: PropTypes.string,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

Textarea.defaultProps = {
  id: '',
  label: '',
  className: '',
  disabled: false,
  placeholder: '',
  errorText: '',
  maxLength: 500,
  rows: '6',
  onChange: () => null,
  onBlur: () => null,
}

export default Textarea
