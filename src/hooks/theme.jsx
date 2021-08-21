import React, { useEffect, useState, createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import themes from '../themes'

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

const ThemeContext = createContext({})

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const getStoredTheme = async () => {
    const isStoredThemeDark = localStorage.getItem('darkTheme')
    !!isStoredThemeDark && setIsDarkTheme(JSON.parse(isStoredThemeDark))
  }

  const toggleTheme = () => setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme)
  useEffect(() => {
    getStoredTheme()
  }, [])

  useEffect(() => {
    localStorage.setItem('darkTheme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={themes[isDarkTheme ? THEMES.DARK : THEMES.LIGHT]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  return themeContext
}

export { ThemeContextProvider, useTheme }
