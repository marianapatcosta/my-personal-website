import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledButton, StyledRipple } from './styles'

const Button = ({ label, icon, hasRippling, onClick, ...props }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)

  useEffect(() => {
    if (!hasRippling) return
    if (coords.x === -1 && coords.y === -1) return setIsRippling(false)

    setIsRippling(true)
    const timer = setTimeout(() => setIsRippling(false), 300)
    return () => clearTimeout(timer)
  }, [coords, hasRippling])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [hasRippling, isRippling])

  const handleClick = event => {
    const rect = event.target.getBoundingClientRect()
    setCoords({ x: event.clientX - rect.left, y: event.clientY - rect.top })
    !!onClick && onClick(event)
  }

  return (
    <StyledButton {...props} onClick={handleClick}>
      {hasRippling && isRippling && (
        <StyledRipple
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
      {!!icon && <img src={icon} alt={`${label} icon`} />}
      <span>{label}</span>
    </StyledButton>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  type: PropTypes.string,
  hasShaking: PropTypes.bool,
  hasRippling: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  id: '',
  label: '',
  className: '',
  disabled: false,
  icon: '',
  type: 'button',
  hasShaking: false,
  hasRippling: false,
  onClick: () => null,
}

export default Button
