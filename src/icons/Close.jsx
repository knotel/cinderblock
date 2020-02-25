import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.borderGray};
`

export const Close = ({ className }) => (
  <Svg viewBox="0 0 357 357" fill="none" className={className}>
    <g>
      <polygon
        points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5"
        fill="currentColor"
      />
    </g>
  </Svg>
)

Close.propTypes = {
  className: PropTypes.string,
}

export default Close
