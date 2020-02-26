import React, { useRef, useEffect } from 'react'

const useOutsideClickHandler = (ref, onOutsideClick) => {
  const handleClickOutside = (event) => {
    if (ref.current && ref.current !== event.target.nextSibling && !ref.current.contains(event.target)) {
      onOutsideClick()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })
}

export default (WrappedComponent) => {
  return props => {
    const { onOutsideClick, ...otherProps } = props
    const wrapperRef = useRef(null)
    useOutsideClickHandler(wrapperRef, onOutsideClick)
    return <WrappedComponent ref={wrapperRef} {...otherProps}>{props.children}</WrappedComponent>
  }
}
