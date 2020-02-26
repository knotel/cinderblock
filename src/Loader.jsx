/* eslint-disable */
import styled, { css, keyframes } from 'styled-components'
import theme from './theme'
import React from 'react'

const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(2);
  }
  100% {
    opacity: 1;
  }
`

const animation = () => css`
  ${pulse} ${theme.duration.slow} infinite alternate;
`

const Loader = styled(({ color, ...rest }) => <div {...rest} />)`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid ${({ color }) => color ? color : theme.colors.black};
  transform-origin: 50% 50%;
  animation: ${animation};
`

export default Loader
