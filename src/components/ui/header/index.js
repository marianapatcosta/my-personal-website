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
  StyledScrollSpyItem,
  StyledHeaderRightSide,
  StyledNavBarLinkWrapper,
  StyledNavBarLinkIcon,
  StyledNavBarLink,
  StyledMenuIcon,
  StyledToggleThemeButton,
} from './styles'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isOnTop, setIsOnTop] = useState(true)

  useEffect(() => {
    setIsOnTop(
      !!window && window.location.pathname === '/' && window.pageYOffset < 10
    )
    const handleScroll = () => setIsOnTop(window.pageYOffset < 10)

    if (!!window && window.location.pathname === '/') {
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
          <StyledToggleThemeButton />
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
          <StyledScrollSpyItem key={`navlink-${label}`}>
            <StyledNavBarLinkWrapper
              to={url}
              href={`/${url}`}
              stripHash
              isOnTop={isOnTop}
            >
              <StyledNavBarLinkIcon src={Icons[icon]} alt={icon} />
              <StyledNavBarLink>{label}</StyledNavBarLink>
            </StyledNavBarLinkWrapper>
          </StyledScrollSpyItem>
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

Header.propTypes = {}

Header.defaultProps = {}

export default Header
