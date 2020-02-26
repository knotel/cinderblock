import { useContext } from 'react'
import ScreenSizeContext from '../contexts/screenSize'

const useScreenSizeFromContext = () => {
  const context = useContext(ScreenSizeContext)
  invariant(context,
    'You must wrap your app in a Cinderblock Provider in order to use the useScreenSize hook.'
  )
  return context 
}

export default useScreenSizeFromContext
