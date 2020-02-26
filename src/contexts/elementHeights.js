import { createContext } from 'react'

const ElementHeightsContext = createContext({
  heights: {},
  updateHeights: () => {},
  registerElement: () => {},
  registerElements: () => {},
})

export default ElementHeightsContext
