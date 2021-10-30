import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Alert, CloseWhite, Info2, Success, Warning } from '../../../icons'
import {
  StyledToast,
  StyledToastMessage,
  StyledToastMessageWrapper,
  StyledToastIcon,
  StyledToastClose,
} from './StyledToast'
import { TOAST_TYPES } from '../../../constants'

const toastIcons = {
  alert: Alert,
  info: Info2,
  success: Success,
  warning: Warning,
}

const Toast = ({ id, message, type, className, autoClearTime, onClear }) => {
  const [willBeDeleted, setWillBeDeleted] = useState(false)

  useEffect(() => {
    let autoDeleteTimer
    let fadeOutTimer
    if (message) {
      const fadeOutTime = autoClearTime && autoClearTime - 500
      fadeOutTimer = setTimeout(() => setWillBeDeleted(true), fadeOutTime)
      autoDeleteTimer = setTimeout(() => onClear && onClear(), autoClearTime)
    }
    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(autoDeleteTimer)
    }
  }, [autoClearTime, message, onClear])

  return (
    <StyledToast
      id={id}
      className={className}
      type={type}
      willBeDeleted={willBeDeleted}
    >
      <StyledToastClose aria-label='Close' onClick={onClear}>
        <img src={CloseWhite} alt='close icon' />
      </StyledToastClose>
      <StyledToastMessageWrapper>
        <StyledToastIcon src={toastIcons[type]} alt={`${type} icon`} />
        <StyledToastMessage type={type}>{message}</StyledToastMessage>
      </StyledToastMessageWrapper>
    </StyledToast>
  )
}

Toast.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TOAST_TYPES)),
  onClean: PropTypes.func,
}

Toast.defaultProps = {
  id: '',
  message: '',
  className: '',
  type: TOAST_TYPES.INFO,
  autoClearTime: 2500,
  onClean: () => null,
}

export default Toast
