import styled from 'styled-components'
import { Flex, Text } from 'pcln-design-system'
import theme from '../theme'

export const Container = styled(Flex)`
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  box-shadow: 0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16);
  background: white;
  padding: ${theme.space[3]}px;
  user-select: none;
  position: fixed;
  transition: all 500ms ease-in;
  left: 0;
  z-index: 5000;
  ${({ open }) => open ? `
    bottom: ${theme.space[4]}px;
    ` : `
    bottom: -${theme.space[6]}px;
  `}
  ${theme.mediaQueries.md} {
    width: fit-content;
    min-width: 300px;
    left: ${theme.space[4]}px;
    ${({ open }) => open ? `
      bottom: ${theme.space[4]}px;
    ` : `
      bottom: -${theme.space[6]}px;
    `}
  }
`

export const Row = styled(Flex)`
  flex: 1;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${theme.space[2]}px;
  }
`

export const Title = styled(Text)`
  color: ${({ color }) => color || 'black'};
  font-size: ${theme.fontSizes[1]}px;
  font-weight: 600;
  margin-left: ${theme.space[2]}px;
`

export const Message = styled(Text)`
  margin-left: ${({ withOffset }) => withOffset
    ? `calc(20px + ${theme.space[2]}px)` : '0px'};
  color: ${({ color }) => color || 'black'};
  font-size: ${theme.fontSizes[1]}px;
`

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
`
