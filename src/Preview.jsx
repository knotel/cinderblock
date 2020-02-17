import styled, { keyframes } from 'styled-components'
import theme from './theme'
import { Text } from 'pcln-design-system'

const placeHolderShimmer = keyframes`
  0% {
    background-position: -284px 0;
  }
  100% {
    background-position: 284px 0;
  }
`

const Preview = styled(Text)`
  white-space: nowrap;
  border-radius: 4px;
  height: ${({ height }) => height || '12px'};
  width: ${({ width }) => width || '80px'};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  ${({ color }) => `
    background: ${color || theme.colors.lightGray};
    background-image: linear-gradient(
      to right,
      ${color || theme.colors.lightGray} 0%,
      ${color || theme.colors.white} 40%,
      ${color || theme.colors.lightGray} 100%
    );
  `}
  background-repeat: no-repeat;
  ${({ margin }) => `margin: ${margin};` || ''}
`

export default Preview