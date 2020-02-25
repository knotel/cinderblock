import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 22px;
  height: 18px;
  color: ${theme.colors.white};
`

export const Mail = ({ className, strokeWidth }) => (
  <Svg viewBox="0 0 22 18" className={className}>
    <g stroke="none" strokeWidth={strokeWidth} fill="none" fillRule="evenodd">
      <g transform="translate(-62.000000, -1469.000000)" stroke="currentColor">
        <g transform="translate(0.000000, 878.000000)">
          <g transform="translate(63.000000, 592.387397)">
            <polyline points="0 0 10 8.87970658 20 0" />
            <rect
              strokeLinecap="square"
              x="0"
              y="0"
              width="20"
              height="15.9834711"
            />
          </g>
        </g>
      </g>
    </g>
  </Svg>
)

Mail.propTypes = {
  className: PropTypes.string,
  strokeWidth: PropTypes.number,
}

Mail.defaultProps = {
  strokeWidth: 1,
}

export default Mail
