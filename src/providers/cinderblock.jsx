import React, { useMemo } from 'react'
import ScreenSizeProvider from './screenSize'
import { ThemeProvider } from 'pcln-design-system'
import cinderblockTheme from '../theme'
import { Toast, ToastService } from '../Toast'
import { Helmet } from 'react-helmet'

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
        <>
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500&display=fallback" rel="stylesheet" />
          </Helmet>
          { children }
          <Toast ref={ToastService.init} />
          <div id="tooltip-portal" />
        </>
      </ScreenSizeProvider>
    </ThemeProvider>
  )
}

export default CinderblockProvider
