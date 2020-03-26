import styled from 'styled-components'
import theme from './theme'

const Button = styled.button`
  background: ${theme.colors.skyBlue};
  color: ${theme.colors.white};

  border: none;
  border-radius: ${theme.radius};

  cursor: pointer;
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[1]}px;
  font-weight: ${theme.fontWeights.semiBold};
  text-align: center;
  padding: ${theme.space[1]}px ${theme.space[2]}px;
  
  &.error {
    background: ${theme.colors.error};
  }
  &:disabled {
    background: ${theme.colors.disabled};
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }
`

export default Button
