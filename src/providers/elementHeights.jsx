import PropTypes from 'prop-types'
import React, { useCallback, useMemo, useState } from 'react'
import { useElementHeights } from '../hooks/useElementHeights'
import ElementHeightsContext from '../contexts/elementHeights'


const ElementHeightsProvider = ({ children }) => {
  const [elements, setElements] = useState({})
  const [heights, updateHeights] = useElementHeights(elements)

  const registerElement = useCallback((id, element) => {
    setElements(s => ({ ...s, [id]: element }))
  }, [setElements])

  const registerElements = useCallback(els => {
    setElements(s => ({ ...s, ...els }))
  }, [setElements])

  const value = useMemo(() => ({
    heights,
    updateHeights,
    registerElement,
    registerElements,
  }), [heights, updateHeights, registerElement, registerElements])

  return (
    <ElementHeightsContext.Provider value={value}>
      {children}
    </ElementHeightsContext.Provider>
  )
}

ElementHeightsProvider.propTypes = {
  children: PropTypes.any,
}

export default ElementHeightsProvider
