import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 32px;
  height: 32px;
  color: ${theme.colors.white};
`

export const Instagram = ({ className }) => (
  <Svg viewBox="0 0 32 32" fill="none" className={className}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-329.000000, -471.000000)" fill="currentColor">
        <g transform="translate(329.000000, 471.000000)">
          <path
            d="M16,2.88266667 C20.272,2.88266667 20.778,2.89866667 22.4653333,2.976 C24.286,3.05933333 25.976,3.424 27.276,4.724 C28.576,6.024 28.9406667,7.714 29.024,9.53466667 C29.1006667,11.222 29.1173333,11.728 29.1173333,16 C29.1173333,20.272 29.1013333,20.778 29.024,22.4653333 C28.9406667,24.286 28.576,25.976 27.276,27.276 C25.976,28.576 24.286,28.9406667 22.4653333,29.024 C20.7786667,29.1006667 20.2726667,29.1173333 16,29.1173333 C11.7273333,29.1173333 11.2213333,29.1013333 9.53466667,29.024 C7.714,28.9406667 6.024,28.576 4.724,27.276 C3.424,25.976 3.05933333,24.286 2.976,22.4653333 C2.89933333,20.778 2.88266667,20.272 2.88266667,16 C2.88266667,11.728 2.89866667,11.222 2.976,9.53466667 C3.05933333,7.714 3.424,6.024 4.724,4.724 C6.024,3.424 7.714,3.05933333 9.53466667,2.976 C11.222,2.89933333 11.728,2.88266667 16,2.88266667 Z M16,0 C11.6546667,0 11.11,0.0186666667 9.40333333,0.096 C6.80333333,0.214666667 4.51933333,0.851333333 2.68533333,2.68533333 C0.852,4.51866667 0.214666667,6.802 0.096,9.40333333 C0.0186666667,11.11 0,11.6546667 0,16 C0,20.3453333 0.0186666667,20.89 0.096,22.5966667 C0.214666667,25.1966667 0.851333333,27.4806667 2.68533333,29.3146667 C4.51866667,31.148 6.802,31.7853333 9.40333333,31.904 C11.11,31.9813333 11.6546667,32 16,32 C20.3453333,32 20.89,31.9813333 22.5966667,31.904 C25.196,31.7853333 27.4806667,31.1486667 29.3146667,29.3146667 C31.148,27.4813333 31.7853333,25.198 31.904,22.5966667 C31.9813333,20.89 32,20.3453333 32,16 C32,11.6546667 31.9813333,11.11 31.904,9.40333333 C31.7853333,6.80333333 31.1486667,4.51933333 29.3146667,2.68533333 C27.4813333,0.852 25.198,0.214666667 22.5966667,0.096 C20.89,0.0186666667 20.3453333,0 16,0 Z"
            fillRule="nonzero"
          />
          <path
            d="M16,7.784 C11.462,7.784 7.784,11.4626667 7.784,16 C7.784,20.5373333 11.462,24.216 16,24.216 C20.538,24.216 24.216,20.538 24.216,16 C24.216,11.462 20.538,7.784 16,7.784 Z M16,21.3333333 C13.0546667,21.3333333 10.6666667,18.9453333 10.6666667,16 C10.6666667,13.0546667 13.0546667,10.6666667 16,10.6666667 C18.9453333,10.6666667 21.3333333,13.0546667 21.3333333,16 C21.3333333,18.9453333 18.9453333,21.3333333 16,21.3333333 Z"
            fillRule="nonzero"
          />
          <circle cx="24.5406667" cy="7.45933333" r="1.92" />
        </g>
      </g>
    </g>
  </Svg>
)

Instagram.propTypes = {
  className: PropTypes.string,
}

export default Instagram