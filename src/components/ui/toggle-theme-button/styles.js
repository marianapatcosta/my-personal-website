import styled from 'styled-components'

export const StyledToggleButtonWrapper = styled.button`
  position: relative;
  align-self: flex-start;

  &:hover {
    opacity: 0.75;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    z-index: -2;
    box-shadow: none;
    transition: all 0.1s ease-in-out 0s;
  }

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    ` :after {
        box-shadow: 0.5rem 0.5rem 2rem rgb(255 255 0 / 80%),
        0 0.3rem 2rem rgb(255 255 0 / 80%), 0 0.5rem 5rem rgb(255 255 0 / 80%),
        0 0.5rem 10rem rgb(255 255 0 / 60%);
        background-color: rgba(255, 255, 0, 0.2);
        filter: blur(0.3rem);
        transition: all 0.3s ease-in-out 0.3s;
    }`}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin-left: 1rem;
  }
`

export const StyledLampIcon = styled.img`
  height: 1.5rem;
  filter: ${({ theme }) => theme.colors.icon};
  transition: all 0.3s ease-in-out 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    `opacity: 0;
    visibility: hidden;`};
`

export const StyledLampIconFilled = styled(StyledLampIcon)`
  opacity: 0;
  visibility: hidden;
  ${({ isDarkTheme }) =>
    isDarkTheme &&
    `opacity: 1;
    visibility: visible;`};
`
