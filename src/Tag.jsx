import styled from 'styled-components'
import { Flex } from 'pcln-design-system'
import theme from './theme'

const Tag = styled(Flex)`
  padding: ${theme.space[1]}px ${theme.space[2]}px;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.radius};
  font-family: ${theme.font};
  font-style: normal;
  font-weight: ${theme.fontWeights.semiBold};
  font-size: ${theme.fontSizes[1]}px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  white-space: nowrap;
  width: auto;
`

export default Tag
