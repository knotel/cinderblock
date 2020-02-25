import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 17px;
  height: 21px;
  color: ${theme.colors.white};
`

export const Pin = ({ className, strokeWidth }) => (
  <Svg viewBox="0 0 17 21" className={className}>
    <g
      stroke="none"
      strokeWidth={strokeWidth}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <g transform="translate(-65.000000, -1513.000000)" stroke="currentColor">
        <g transform="translate(0.000000, 878.000000)">
          <g transform="translate(66.000000, 635.342975)">
            <path d="M14.7727273,7.49225188 C14.7727273,12.4870865 7.5,19.7523004 7.5,19.7523004 C7.5,19.7523004 0.227272727,12.4870865 0.227272727,7.49225188 C0.227272727,2.89473369 3.98545455,0.227037948 7.5,0.227037948 C11.0145455,0.227037948 14.7727273,2.89473369 14.7727273,7.49225188 Z" />
            <ellipse cx="7.5" cy="7.49225183" rx="2.27272727" ry="2.27037939" />
          </g>
        </g>
      </g>
    </g>
  </Svg>
)

Pin.propTypes = {
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
}

Pin.defaultProps = {
  strokeWidth: 1,
}

export default Pin
