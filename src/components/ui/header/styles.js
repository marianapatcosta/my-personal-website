import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Scrollspy from 'react-scrollspy'

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.063rem 0.5rem ${({ theme }) => theme.colors.shadow};
  z-index: 10;
  padding: 0 1rem;
  box-sizing: border-box;
  transition: all 0.5s ease-in-out;
  user-select: none;

  ${({ isOnTop, theme }) =>
    isOnTop &&
    `background-color: ${theme.colors.highlight};
    box-shadow: none; color: ${theme.colors.primary};`}

  @media (min-width: ${({ theme }) => theme.breakpoints.xm}) {
    padding: 0 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem 3rem;
  }
`

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledHeaderTitle = styled.img`
  width: 3rem;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 3.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 4rem;
  }
`

export const StyledHeaderRightSide = styled.div`
  display: flex;
`

export const StyledScrollSpy = styled(Scrollspy)`
  display: flex;
  flex-direction: column;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: grid;
    gap: 1rem;
    grid-template-columns: ${({ columnsNumber }) =>
      `repeat(${columnsNumber}, 5rem)`};
  }
`

export const StyledNavBar = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
  }
`

export const StyledNavBarMobile = styled.nav`
  height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  ${({ isMenuOpened }) => isMenuOpened && `height: 7rem;`}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`

export const StyledNavBarLinkIcon = styled.img`
  height: 1.2rem;
  margin-right: 0.5rem;
  filter: ${({ theme }) => theme.colors.icon};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 1.5rem;
    margin-right: 0;
    padding-bottom: 0.8rem;
  }
`

export const StyledNavBarLink = styled.span`
  color: ${({ theme }) => theme.colors.font};
  line-height: 100%;
  white-space: nowrap;
`

export const StyledNavBarLinkWrapper = styled(AnchorLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;

  &:hover ${StyledNavBarLink} {
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 700;
  }

  &:hover ${StyledNavBarLinkIcon} {
    filter: ${({ theme }) => theme.colors.iconHighlight};
  }

  ${({ isOnTop, theme }) =>
    isOnTop &&
    `
      &:hover ${StyledNavBarLink} {
        color: ${theme.colors.primary};
      }

      &:hover ${StyledNavBarLinkIcon} {
        filter: ${theme.colors.iconFont};
      }
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
`

export const StyledLampIconWrapper = styled.button`
  position: relative;
  background: none;
  border: none;
  align-self: flex-start;
  cursor: pointer;

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

export const StyledMenuIcon = styled.button`
  border: none;
  background: none;
  width: 1.5rem;
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-left: 2.5rem;
  margin-top: 0.125rem;
  cursor: pointer;

  span {
    background-color: ${({ theme }) => theme.colors.font};
    display: block;
    height: 0.15rem;
    width: 100%;
    border-radius: 0.625rem;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    transform-origin: 0.0625rem center;

    ${({ isMenuOpened }) =>
      isMenuOpened &&
      `:nth-child(1) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        :nth-child(2) {
          opacity: 0;
          visibility: hidden;
          transform: translateX(2rem);
        }

        :nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
   `}
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: none;
  }
`
