import throttle from 'lodash/throttle'
import { useEffect, useMemo, useRef, useState } from 'react'
import { isMobileMatch } from '../media'

const isClient = () => typeof window !== 'undefined'

const getWindowWidth = defaultWidth => {
  if (!isClient()) {
    return defaultWidth
  }
  return document.documentElement ? document.documentElement.clientWidth : window.innerWidth
}


const useScreenSize = (defaultWidth = null, throttleWait = 500) => {
  const initialState = useMemo(() => ({
    isMobile: !isClient() ? null : isMobileMatch(),
    windowWidth: getWindowWidth(defaultWidth),
  }), [defaultWidth])

  const [state, setState] = useState(initialState)
  const screenSizeReset = useRef()
  const prevState = useRef(state)

  useEffect(() => {
    const resetScreenSize = () => {
      const isMobile = isMobileMatch()
      const windowWidth = getWindowWidth(defaultWidth)

      const stateChanged = (
        !prevState.current ||
        (isMobile !== prevState.current.isMobile || windowWidth !== prevState.current.windowWidth)
      )

      if (stateChanged) {
        prevState.current = { isMobile, windowWidth }
        setState({ isMobile, windowWidth })
      }
    }
    screenSizeReset.current = throttle(resetScreenSize, throttleWait)
    window.addEventListener('resize', screenSizeReset.current)
    resetScreenSize()

    return () => {
      if (screenSizeReset && screenSizeReset.current) {
        window.removeEventListener('resize', screenSizeReset.current)
      }
    }
  }, [defaultWidth, throttleWait])

  return state
}

export default useScreenSize
