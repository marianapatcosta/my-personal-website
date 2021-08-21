import React from 'react'
import { useTheme } from '../../../hooks/theme'
import * as Icons from '../../../icons'
import {
  StyledToggleButtonWrapper,
  StyledLampIcon,
  StyledLampIconFilled,
} from './styles'

const ToggleThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useTheme()

  return (
    <StyledToggleButtonWrapper
      aria-label='click to toggle dark mode'
      onClick={toggleTheme}
      isDarkTheme={isDarkTheme}
    >
      <StyledLampIcon src={Icons.Lamp} alt='lamp' isDarkTheme={isDarkTheme} />
      <StyledLampIconFilled
        src={Icons.LampFilled}
        alt='lamp dark theme'
        isDarkTheme={isDarkTheme}
      />
    </StyledToggleButtonWrapper>
  )
}

ToggleThemeButton.propTypes = {}

ToggleThemeButton.defaultProps = {}

export default ToggleThemeButton
