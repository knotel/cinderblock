import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 18px;
  height: 18px;
  color: ${theme.colors.blue};
`

export const Filter = ({ className }) => (
  <Svg viewBox="0 0 18 18" fill="none" className={className}>
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.109904 0.54339C0.280962 0.209835 0.624682 0 1 0H17C17.3754 0 17.7192 0.209944 17.8902 0.543635C18.0612 0.877326 18.0307 1.27854 17.811 1.58254L11.972 9.66499V14.0062C11.972 14.3205 11.8238 14.6164 11.572 14.805L7.572 17.8003C7.26899 18.0272 6.86357 18.0637 6.52479 17.8946C6.18601 17.7255 5.972 17.3797 5.972 17.0015V9.59679L0.188652 1.5821C-0.0307457 1.27805 -0.0611549 0.876945 0.109904 0.54339ZM2.95299 1.99689L7.78336 8.69092C7.90601 8.86089 7.972 9.06508 7.972 9.27457V15.0047L9.972 13.507V9.34246C9.972 9.13278 10.0381 8.92843 10.161 8.75837L15.0457 1.99689H2.95299Z"
        fill="currentColor"
      />
    </g>
  </Svg>
)

Filter.propTypes = {
  className: PropTypes.string,
}

export default Filter
