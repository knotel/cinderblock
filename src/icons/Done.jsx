import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: ${({ width }) => width || 20}px;
  height: ${({ height }) => height || 20}px;
  color: ${theme.colors.doneGreen};
`

export const Done = ({ className }) => (
  <Svg viewBox="0 0 20 20" fill="none" className={className}>
    <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM14.59 5.58L8 12.17L5.41 9.59L4 11L8 15L16 7L14.59 5.58Z"
      fill="currentColor"
    />
  </Svg>
)

Done.propTypes = {
  className: PropTypes.string,
}

export default Done
