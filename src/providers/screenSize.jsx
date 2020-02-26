import PropTypes from 'prop-types'
import React from 'react'
import useScreenSize from '../hooks/useScreenSize'
import ScreenSizeContext from '../contexts/screenSize'

const ScreenSizeProvider = ({ children }) => {
  const value = useScreenSize()

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  )
}

ScreenSizeProvider.propTypes = {
  children: PropTypes.any,
}

export default ScreenSizeProvider
