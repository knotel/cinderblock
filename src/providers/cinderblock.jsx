import React, { useMemo } from 'react'
import ScreenSizeProvider from './screenSize'
import ElementHeightsProvider from './elementHeights'
import { ThemeProvider } from 'pcln-design-system'
import cinderblockTheme from '../theme'

const CinderblockProvider = ({ theme, children }) => {
  const memoizedTheme = useMemo(() => {
    return {
      ...cinderblockTheme,
      ...theme,
    }
  }, [theme])
  return (
    <ThemeProvider theme={memoizedTheme}>
      <ScreenSizeProvider>
        <ElementHeightsProvider>
          { children }
        </ElementHeightsProvider>
      </ScreenSizeProvider>
    </ThemeProvider>
  )
}

export default CinderblockProvider
