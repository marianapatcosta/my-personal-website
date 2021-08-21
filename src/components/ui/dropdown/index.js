import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { ChevronThinner } from '../../../icons'
import { Checkbox } from '../'
import { KEYBOARD_KEY } from '../../../constants'
import {
  StyledDropdown,
  StyledDropdownHeader,
  StyledDropdownArrow,
  StyledDropdownOptions,
  StyledDropdownOption,
} from './styles'

const Dropdown = ({
  placeholder,
  options,
  optionKey,
  disabled,
  isSingleSelection,
  selectedOptions,
  selectedOption,
  onOptionClick,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = event => {
      const element = event.target

      if (dropdownRef.current && !dropdownRef?.current.contains(element)) {
        event.preventDefault()
        setIsExpanded(false)
      }
    }
    document.addEventListener('mouseup', handleClickOutside)

    return () => document.removeEventListener('mouseup', handleClickOutside)
  }, [dropdownRef])

  const isOptionSelected = option => {
    if (!!selectedOptions?.length) {
      const selectedOptionsLabels = optionKey
        ? selectedOptions.map(option => option[optionKey])
        : selectedOptions
      return selectedOptionsLabels?.includes(
        optionKey ? option[optionKey] : option
      )
    }

    return optionKey
      ? option[optionKey] === selectedOption[optionKey]
      : selectedOption === option
  }

  const toggleDropdownExpansion = () => {
    !disabled && setIsExpanded(prevIsExpanded => !prevIsExpanded)
  }

  const handleKeyEvent = event => {
    event.stopPropagation()
    if (disabled) return
    if (event.key === KEYBOARD_KEY.ESCAPE_KEY) {
      return setIsExpanded(false)
    }
    if (event.key === KEYBOARD_KEY.ENTER_KEY) {
      return setIsExpanded(prevIsExpanded => !prevIsExpanded)
    }
    if (event.key === KEYBOARD_KEY.SPACE_KEY) {
      return setIsExpanded(true)
    }
  }

  const getPlaceholder = () => {
    if (!isSingleSelection) return placeholder
    return optionKey ? selectedOption[optionKey] : selectedOption
  }

  return (
    <StyledDropdown {...props} ref={dropdownRef}>
      <StyledDropdownHeader
        disabled={disabled}
        role='button'
        tabIndex={disabled ? -1 : 0}
        aria-label={`Select ${placeholder}`}
        aria-expanded={isExpanded}
        onClick={toggleDropdownExpansion}
        onKeyDown={handleKeyEvent}
      >
        <div>{getPlaceholder() || placeholder}</div>
        <StyledDropdownArrow
          isExpanded={isExpanded}
          alt='chevron-icon'
          src={ChevronThinner}
        />
      </StyledDropdownHeader>
      <StyledDropdownOptions
        data-testid='dropdown-options'
        isExpanded={isExpanded}
      >
        {options.map((option, index) => (
          <StyledDropdownOption key={index * Math.random()}>
            <Checkbox
              disabled={disabled}
              onChange={() => onOptionClick(option)}
              checked={isOptionSelected(option)}
              label={optionKey ? option[optionKey] : option}
            />
          </StyledDropdownOption>
        ))}
      </StyledDropdownOptions>
    </StyledDropdown>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isSingleSelection: PropTypes.bool,
  options: PropTypes.array,
  selectedOptions: PropTypes.array,
  selectedOption: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  optionKey: PropTypes.string,
  onOptionClick: PropTypes.func,
}

Dropdown.defaultProps = {
  id: '',
  className: '',
  style: {},
  placeholder: '',
  disabled: false,
  isSingleSelection: false,
  options: [],
  selectedOptions: [],
  selectedOption: '',
  optionKey: '',
  onOptionClick: () => null,
}

export default Dropdown
