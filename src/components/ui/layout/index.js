import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { Header, Footer } from '..'
import { GlobalStyle } from '../../../themes/global-style'
import darkTheme from '../../../themes/dark'
import lightTheme from '../../../themes/light'
import { StyledMain } from './styles.js'

const Layout = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          authorName
        }
      }
    }
  `)

  useEffect(() => {
    const darkTheme = localStorage.getItem('darkTheme')
    darkTheme && setIsDarkTheme(JSON.parse(darkTheme))
  }, [])

  useEffect(() => {
    localStorage.setItem('darkTheme', isDarkTheme)
  }, [isDarkTheme])

  const toggleThemeMode = () =>
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header isDarkTheme={isDarkTheme} toggleThemeMode={toggleThemeMode} />
        <StyledMain>{children}</StyledMain>
        <Footer authorName={data.site.siteMetadata?.authorName} />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
