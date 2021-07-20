import React from 'react'
import PropTypes from 'prop-types'

import { Tick } from '../../../icons'
import {
  StyledCheckbox,
  StyledCheckboxToggle,
  StyledCheckboxInput,
  StyledCheckboxToggleTick,
} from './styles'

const Checkbox = ({
  checked,
  name,
  disabled,
  label,
  className,
  onChange,
  ...props
}) => {
  return (
    <StyledCheckbox className={className} disabled={disabled} {...props}>
      <StyledCheckboxInput
        type='checkbox'
        name={name || label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <StyledCheckboxToggle disabled={disabled}>
        {checked && <StyledCheckboxToggleTick alt='checkbox-tick' src={Tick} />}
      </StyledCheckboxToggle>
      {label}
    </StyledCheckbox>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  id: '',
  className: '',
  style: {},
  name: '',
  label: '',
  checked: false,
  disabled: false,
  onChange: () => null,
}

export default Checkbox
