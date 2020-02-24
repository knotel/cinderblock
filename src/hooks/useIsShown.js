import { useCallback, useState } from 'react'

export const useIsShown = (defaultValue = false) => {
  const [isShown, setIsShown] = useState(defaultValue)
  const show = useCallback(() => { setIsShown(true) }, [])
  const hide = useCallback(() => { setIsShown(false) }, [])
  const toggle = useCallback(() => { setIsShown(s => !s) }, [])

  return { isShown, show, hide, toggle }
}

export default useIsShown
