import useIsShown from '../hooks/useIsShown'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { useEffect } from 'react'

export const useModal = (defaultValue = false) => {
  const { isShown: isOpen, show: open, hide: close } = useIsShown(defaultValue)
  useEffect(() => {
    if (isOpen) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }
  }, [isOpen])

  return { isOpen, open, close }
}

export default useModal
