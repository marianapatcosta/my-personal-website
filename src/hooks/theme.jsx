import React, { useEffect, useState, createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { themes } from '../themes'

const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
}

const ThemeContext = createContext({})

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState()

  const getStoredTheme = async () => {
    const isStoredThemeDark = localStorage.getItem('darkTheme')
    if (isStoredThemeDark) {
      return setIsDarkTheme(JSON.parse(isStoredThemeDark))
    }
    setIsDarkTheme(false)
    localStorage.setItem('darkTheme', JSON.stringify(false))
  }

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('darkTheme', JSON.stringify(!isDarkTheme))
  }

  useEffect(() => {
    getStoredTheme()
  }, [])

  useEffect(() => {}, [isDarkTheme])

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
