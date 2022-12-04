import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { CookieBar, Header, Footer, ToastList } from '..'
import { GlobalStyle } from '../../../themes/global-style'
import { ThemeContextProvider } from '../../../hooks/theme'
import { ToastContextProvider } from '../../../hooks/toast'
import { StyledMain, StyledTalkToMe } from './styles.js'

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
        <ToastContextProvider>
          <GlobalStyle />
          <Header />
          <StyledMain>
            {children}
            <StyledTalkToMe />
          </StyledMain>
          <Footer authorName={data.site.siteMetadata?.authorName} />
          <CookieBar />
          <ToastList />
        </ToastContextProvider>
      </ThemeContextProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
