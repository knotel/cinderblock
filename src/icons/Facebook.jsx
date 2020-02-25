import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 18px;
  height: 32px;

  color: ${theme.colors.white};
`

export const Facebook = ({ className }) => (
  <Svg viewBox="0 0 18 32" fill="none" className={className}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-271.000000, -471.000000)" fill="currentColor">
        <g transform="translate(271.000000, 471.000000)">
          <path d="M5.33035636,32 L5.33035636,17.4033091 L0.418261818,17.4033091 L0.418261818,11.7146764 L5.33035636,11.7146764 L5.33035636,7.51948364 C5.33035636,2.65098909 8.30386909,0 12.6469018,0 C14.7272582,0 16.5152218,0.154887273 17.0362764,0.224116364 L17.0362764,5.31197818 L14.0241527,5.31334545 C11.6621673,5.31334545 11.2048291,6.43572364 11.2048291,8.08274182 L11.2048291,11.7146764 L16.8379418,11.7146764 L16.1044873,17.4033091 L11.2048218,17.4033091 L11.2048218,32 L5.33035636,32 Z" />
        </g>
      </g>
    </g>
  </Svg>
)

Facebook.propTypes = {
  className: PropTypes.string,
}

export default Facebook
