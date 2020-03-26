import styled from 'styled-components'
import theme from './theme'
import Button from './Button'

const OutlineButton = styled(Button)`
  background: ${theme.colors.white};
  color: ${theme.colors.skyBlue};
  border: 1px solid ${theme.colors.skyBlue};
  
  &.error {
    color: ${theme.colors.error};
    border: 1px solid ${theme.colors.error};
    background: ${theme.colors.white};
  }
  &:disabled {
    color: ${theme.colors.disabled};
    border: 1px solid ${theme.colors.disabled};
    background: ${theme.colors.white};
  }
`

export default OutlineButton
