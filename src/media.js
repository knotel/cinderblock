import { css } from 'styled-components'

import theme from './theme'

export const isMediaMatch = breakpoint => {
  let isMatch = false
  try {
    isMatch = !window.matchMedia(`screen and (min-width: ${breakpoint})`).matches
  } catch (e) {
    isMatch = false
  }

  return isMatch
}

export const isMobileMatch = () => isMediaMatch(theme.breakpoints[1])

const mediaQueryAliases = ['sm', 'md', 'lg', 'xl']
const generateMedia = () => {
  const media = {
    // convenience style for hiding things on non-mobile
    mobileOnly: css`
      ${({ theme }) => theme.mediaQueries.md} {
        display: none;
      }
    `,
  }
  // instead of ${({ theme }) = theme.mediaQueries.sm} { <styles> },
  // use ${media.sm`<styles>`}
  mediaQueryAliases.forEach(alias => {
    media[alias] = (...args) => css`
      ${theme.mediaQueries[alias]} {
        ${css(...args)}
      }
    `
  })
  return media
}

export default generateMedia()
