const createMediaQuery = n => `@media screen and (min-width:${n})`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get () {
        return this[i]
      },
    })
  )

const breakpoints = [32, 40, 48, 64].map(n => n + 'em')

const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

const space = [0, 4, 8, 16, 32, 64, 128]

const font = '\'Montserrat\',\'Helvetica Neue\',Helvetica,Arial,sans-serif'

const fontSizes = [10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 42, 48]

const medium = 400
const semiBold = 600
const bold = 700
// alias
const regular = medium

// styled-system's `fontWeight` function can hook into the `fontWeights` object
const fontWeights = {
  medium,
  semiBold,
  bold,
  // alias
  regular,
}

const lineHeights = {
  standard: 1.5,
  display: 1.25,
}

const letterSpacings = {
  normal: 'normal',
  caps: '0.025em',
}

// Knotel 2.0 brand palette

const primaryColors = {
  primary100: '#EEF3FC',
  primary200: '#DDE7F9',
  primary300: '#BCD0F3',
  primary400: '#9BB8ED',
  primary500: '#6995E4',
  primary600: '#3772DB',
  primary700: '#245EC7',
  primary800: '#1E4EA6',
  primary900: '#183F85',
  primary1000: '#0F1753'
}

const midnightColors = {
  midnight100: '#EEEDF9',
  midnight200: '#E0DFF3',
  midnight300: '#C5C2E9',
  midnight400: '#A9A5DF',
  midnight500: '#807ACF',
  midnight600: '#574FBF',
  midnight700: '#453DA9',
  midnight800: '#342E7E',
  midnight900: '#221E53',
  midnight1000: '#161436'
}

const skyColors = {
  sky100: '#F4FAFD',
  sky200: '#E3F2FB',
  sky300: '#C1E2F5',
  sky400: '#9FD2F0',
  sky500: '#6CBBE8',
  sky600: '#4AABE3',
  sky700: '#289BDE',
  sky800: '#1B79B0',
  sky900: '#16628E',
  sky1000: '#144A6C'
}

// Legacy Knotel colors

const legacyColors = {
  navy: '#221E53',
  darkBlue: '#283982',
  blue: '#1C7EB0',
  skyBlue: '#49AEE2',
  lightBlue: '#C7EAFB',
  coral: '#EF4656',
  burgundy: '#78122A',
  rose: '#C7364C',
  pink: '#FCD8D6',
  mint: '#0AA69D',
  gold: '#FFBA08',
  orange: '#E55812',
  purple: '#662C91',
  danger: '#B00020'
}

// Typographic Colors

const typographyColors = {
  text: '#001833',
  textSecondary: '#455A64',
  label: '#607D8B',
  paragraph: '#263238',
  placeholder: '#919EAB',
  disabled: '#B0BEC5'
}

// Layout colors

const layoutColors = {
  layoutSurfaceLight: '#FAFAFA',
  layoutHoverLight: '#F5F5F5',
  layoutStroke: '#CFD8DC',
  layoutStrokeLight: '#ECEFF1',
  black: '#000',
  white: '#FFF'
}

const coreColors = {
  primary: primaryColors.primary700,
  secondary: legacyColors.coral,
  midnight: midnightColors.midnight900,
  sky: skyColors.sky600,
  error: legacyColors.danger,
  success: legacyColors.mint,
  warning: legacyColors.gold,
}

const colors = {
  ...coreColors,
  ...primaryColors,
  ...midnightColors,
  ...skyColors,
  ...typographyColors,
  ...layoutColors,
  ...legacyColors,
  coreColors,
  primaryColors,
  midnightColors,
  skyColors,
  typographyColors,
  layoutColors,
  legacyColors
}

const buttonSizes = {
  sm: 32,
  md: 40,
  lg: 48,
}

// styled-system's `borderRadius` function can hook into the `radii` object/array
const radii = [0, 2, 6]
const radius = '2px'

const maxContainerWidth = '1232px'

const inputDefaultWidth = '288px'

const inputPaddingLeft = `${space[2]}px`

// boxShadows
const boxShadows = [
  '0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)',
  '0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)',
  '0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)',
  '0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)',
]

// animation duration
const duration = {
  fast: '150ms',
  normal: '300ms',
  slow: '450ms',
  slowest: '600ms',
}

// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)'
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)'
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)'

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn,
}

// animation delay
const transitionDelays = {
  small: '60ms',
  medium: '160ms',
  large: '260ms',
  xLarge: '360ms',
}

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  regular,
  colors,
  buttonSizes,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  inputDefaultWidth,
  inputPaddingLeft,
  duration,
  timingFunctions,
  transitionDelays,
}

export default theme
