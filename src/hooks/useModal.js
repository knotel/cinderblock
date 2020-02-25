import useIsShown from './useIsShown'
import { ScrollLock } from 'pcln-modal'
import { useEffect } from 'react'

const scrollLock = new ScrollLock()

export const useModal = (defaultValue = false) => {
  const { isShown: isOpen, show: open, hide: close } = useIsShown(defaultValue)
  useEffect(() => {
    if (isOpen) {
      scrollLock.on()
    } else {
      scrollLock.off()
    }
  }, [isOpen])

  return { isOpen, open, close }
}

export default useModal
