import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 32px;
  height: 32px;
  color: ${theme.colors.spaceBlue};
`

export const Image = ({ className }) => (
  <Svg viewBox="0 0 32 32" className={className} fill="none">
    <g>
      <path d="M25.3333 6.66667V25.3333H6.66667V6.66667H25.3333ZM25.3333 4H6.66667C5.2 4 4 5.2 4 6.66667V25.3333C4 26.8 5.2 28 6.66667 28H25.3333C26.8 28 28 26.8 28 25.3333V6.66667C28 5.2 26.8 4 25.3333 4ZM18.8533 15.8133L14.8533 20.9733L12 17.52L8 22.6667H24L18.8533 15.8133Z" fill="currentColor" />
    </g>
  </Svg>
)

Image.propTypes = {
  className: PropTypes.string,
}

export default Image
