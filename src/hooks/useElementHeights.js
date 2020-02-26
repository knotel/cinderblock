import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

import { ScreenSizeContext } from '../contexts/screenSize'

const getElementHeight = element => element ? element.clientHeight : null

export const useElementHeight = element => {
  const initialValue = useMemo(() => getElementHeight(element), [element])
  const [height, setHeight] = useState(initialValue)

  const { windowWidth } = useContext(ScreenSizeContext)

  const updateHeight = useCallback(() => {
    setHeight(getElementHeight(element))
  }, [element])

  useEffect(() => {
    updateHeight()
  }, [windowWidth, updateHeight])

  return [height, updateHeight]
}

const getElementHeights = elements => {
  const values = {}
  Object.keys(elements).forEach(id => {
    values[id] = getElementHeight(elements[id])
  })
  return values
}

export const useElementHeights = elements => {
  const initialValue = useMemo(() => getElementHeights(elements), [elements])
  const [heights, setHeights] = useState(initialValue)

  const { windowWidth } = useContext(ScreenSizeContext)

  const uniqueValues = useRef(new Set())

  const updateElementHeights = useCallback(() => {
    const heights = getElementHeights(elements)
    const newUniques = new Set()

    let shouldUpdate = false
    Object.keys(heights).forEach(elementId => {
      const uniqueId = `${elementId}-${heights[elementId]}`
      if (!uniqueValues.current.has(uniqueId)) {
        shouldUpdate = true
      }
      newUniques.add(uniqueId)
    })

    if (shouldUpdate) {
      uniqueValues.current = newUniques
      setHeights(heights)
    }
  }, [elements])

  useEffect(() => {
    updateElementHeights()
  }, [windowWidth, updateElementHeights])

  return [heights, updateElementHeights]
}

export default useElementHeight
