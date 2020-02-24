import styled from 'styled-components'
import theme from './theme'

const Button = styled.button`
  background: ${theme.colors.blue};
  width: 100%;
  color: white;

  min-width: 132px;
  border: none;
  border-radius: 2px;
  height: 55px;

  cursor: pointer;
  font-family: ${theme.font};
  font-size: ${theme.fontSizes[1]}px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 19px;
  text-align: center;
  padding: 5px 10px;
  
  &.error {
    background: ${theme.colors.error};
  }
  &:disabled {
    background: ${theme.colors.disabled};
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${theme.colors.blue};
    opacity: 0.8;
  }
`

export default Button
