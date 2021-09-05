import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Scrollspy from 'react-scrollspy'
import ToggleThemeButton from '../toggle-theme-button'

export const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: auto;
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0.063rem 0.5rem ${({ theme }) => theme.colors.shadow};
  z-index: 10;
  flex-direction: column;
  padding: 0 1rem;
  box-sizing: border-box;
  user-select: none;

  ${({ isOnTop, theme }) =>
    isOnTop &&
    `background-color: ${theme.colors.highlight};
    box-shadow: none;
    z-index: 0;
    color: ${theme.colors.primary};
  `}

  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 2rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0.5rem 3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem 5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0.5rem 12rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0.5rem 12rem;
  }
`

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 5rem;
  }
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

  ${({ isMenuOpened }) => isMenuOpened && `height: 8.5rem;`}

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

export const StyledToggleThemeButton = styled(ToggleThemeButton)`
  align-self: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding-right: 1rem;
    margin-left: 1rem;
  }
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
