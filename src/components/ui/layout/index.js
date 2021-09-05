import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { CookieBar, Header, Footer } from '..'
import { GlobalStyle } from '../../../themes/global-style'
import { StyledMain } from './styles.js'
import { ThemeContextProvider } from '../../../hooks/theme'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `)

  return (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Header />
        <StyledMain>{children}</StyledMain>
        <Footer authorName={data.site.siteMetadata?.authorName} />
        <CookieBar />
      </ThemeContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
