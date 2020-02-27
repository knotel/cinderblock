import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: ${({ width }) => width || 24}px;
  height: ${({ height }) => height || 24}px;
  color: ${({ color }) => color || theme.colors.text};
`

export const Check = ({ className }) => (
  <Svg viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M8.6 15.6l-4.2-4.2L3 12.8l5.6 5.6 12-12L19.2 5 8.6 15.6z"
      fill="currentColor"
    />
  </Svg>
)

Check.propTypes = {
  className: PropTypes.string,
}

export default Check
