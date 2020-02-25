import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 22px;
  height: 16px;
  color: ${theme.colors.white};
`

export const Laptop = ({ className }) => (
  <Svg viewBox="0 0 22 16" fill="none" className={className}>
    <g>
      <path
        d="M18.3333 14C19.3417 14 20.1667 13.1 20.1667 12V2C20.1667 0.9 19.3417 0 18.3333 0H3.66667C2.65833 0 1.83333 0.9 1.83333 2V12C1.83333 13.1 2.65833 14 3.66667 14H0V16H22V14H18.3333ZM3.66667 2H18.3333V12H3.66667V2Z"
        fill="currentColor"
      />
    </g>
  </Svg>
)

Laptop.propTypes = {
  className: PropTypes.string,
}

export default Laptop
