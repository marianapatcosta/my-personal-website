import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { navigate, graphql, StaticQuery } from 'gatsby'
import * as Icons from '../../../icons'
import './styles.css'
import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderTitle,
  StyledNavBar,
  StyledNavBarMobile,
  StyledScrollSpy,
  StyledHeaderRightSide,
  StyledNavBarLinkWrapper,
  StyledNavBarLinkIcon,
  StyledNavBarLink,
  StyledLampIconWrapper,
  StyledLampIcon,
  StyledLampIconFilled,
  StyledMenuIcon,
} from './styles'

const Header = ({ isDarkTheme, toggleThemeMode }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isOnTop, setIsOnTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsOnTop(window.pageYOffset < 10)

    if (!!window && window.location.pathname === '/') {
      setIsOnTop(true)
      window.addEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleIsMenuOpened = () =>
    setIsMenuOpened(prevIsMenuOpened => !prevIsMenuOpened)

  const scrollToTop = () => {
    window.location.pathname !== '/' && navigate('/')
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return (
    <StyledHeader isMenuOpened={isMenuOpened} isOnTop={isOnTop}>
      <StyledHeaderWrapper>
        <StyledHeaderTitle
          src={Icons.Logo}
          alt='my portfolio logo'
          isOnTop={isOnTop}
          onClick={scrollToTop}
        />
        <StyledHeaderRightSide>
          <StyledNavBar>
            <NavBar isOnTop={isOnTop} />
          </StyledNavBar>
          <StyledLampIconWrapper
            aria-label='click to toggle dark mode'
            onClick={toggleThemeMode}
            isDarkTheme={isDarkTheme}
          >
            <StyledLampIcon
              src={Icons.Lamp}
              alt='lamp'
              isDarkTheme={isDarkTheme}
            />
            <StyledLampIconFilled
              src={Icons.LampFilled}
              alt='lamp dark theme'
              isDarkTheme={isDarkTheme}
            />
          </StyledLampIconWrapper>
          <StyledMenuIcon
            aria-label='click to open the navigation menu'
            isMenuOpened={isMenuOpened}
            onClick={toggleIsMenuOpened}
          >
            <span></span>
            <span></span>
            <span></span>
          </StyledMenuIcon>
        </StyledHeaderRightSide>
      </StyledHeaderWrapper>
      <StyledNavBarMobile isMenuOpened={isMenuOpened}>
        <NavBar isOnTop={isOnTop} />
      </StyledNavBarMobile>
    </StyledHeader>
  )
}

const NavBar = ({ isOnTop }) => (
  <StaticQuery
    query={graphql`
      query NavLinksQuery {
        allNavLinksJson {
          edges {
            node {
              label
              url
              icon
            }
          }
        }
      }
    `}
    render={data => (
      <StyledScrollSpy
        columnsNumber={data.allNavLinksJson.edges.length}
        items={data.allNavLinksJson.edges.map(
          ({ node: { url } }) => url.split('/#')[1]
        )}
        currentClassName='active'
      >
        {data.allNavLinksJson.edges.map(({ node: { label, icon, url } }) => (
          <li key={`navlink-${label}`}>
            <StyledNavBarLinkWrapper
              to={url}
              href={`/${url}`}
              stripHash
              isOnTop={isOnTop}
            >
              <StyledNavBarLinkIcon src={Icons[icon]} alt={icon} />
              <StyledNavBarLink>{label}</StyledNavBarLink>
            </StyledNavBarLinkWrapper>
          </li>
        ))}
      </StyledScrollSpy>
    )}
  />
)

NavBar.propTypes = {
  isOnTop: PropTypes.bool,
}

NavBar.defaultProps = {
  isOnTop: false,
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool,
  toggleThemeMode: PropTypes.func,
}

Header.defaultProps = {
  isDarkTheme: false,
  toggleThemeMode: () => null,
}

export default Header
