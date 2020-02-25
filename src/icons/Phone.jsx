import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 21px;
  height: 22px;
  color: ${theme.colors.white};
`

export const Phone = ({ className, strokeWidth }) => (
  <Svg viewBox="0 0 21 22" fill="none" className={className}>
    <g
      stroke="none"
      strokeWidth={strokeWidth}
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <g transform="translate(-62.000000, -1422.000000)" stroke="currentColor">
        <g transform="translate(0.000000, 878.000000)">
          <g transform="translate(63.000000, 545.435950)">
            <path d="M15.2380952,12.3681621 L12.3809524,15.2223534 L4.76190476,7.6111767 L7.61904762,4.75698544 L2.85714286,0 L0,2.85419126 C0,12.3120297 7.6752381,19.9793388 17.1428571,19.9793388 L20,17.1251476 L15.2380952,12.3681621 Z" />
          </g>
        </g>
      </g>
    </g>
  </Svg>
)

Phone.propTypes = {
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
}

Phone.defaultProps = {
  strokeWidth: 1,
}

export default Phone
