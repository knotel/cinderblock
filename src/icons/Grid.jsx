import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 14px;
  height: 14px;
  color: ${theme.colors.spaceBlue};
`

export const Grid = ({ className }) => (
  <Svg viewBox="0 0 14 14" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.333008 0.99998C0.333008 0.63179 0.631485 0.333313 0.999674 0.333313H5.66634C6.03453 0.333313 6.33301 0.63179 6.33301 0.99998V5.66665C6.33301 6.03484 6.03453 6.33331 5.66634 6.33331H0.999674C0.631485 6.33331 0.333008 6.03484 0.333008 5.66665V0.99998ZM1.66634 1.66665V4.99998H4.99967V1.66665H1.66634Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.66602 0.99998C7.66602 0.63179 7.96449 0.333313 8.33268 0.333313H12.9993C13.3675 0.333313 13.666 0.63179 13.666 0.99998V5.66665C13.666 6.03484 13.3675 6.33331 12.9993 6.33331H8.33268C7.96449 6.33331 7.66602 6.03484 7.66602 5.66665V0.99998ZM8.99935 1.66665V4.99998H12.3327V1.66665H8.99935Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.333008 8.33329C0.333008 7.9651 0.631485 7.66663 0.999674 7.66663H5.66634C6.03453 7.66663 6.33301 7.9651 6.33301 8.33329V13C6.33301 13.3681 6.03453 13.6666 5.66634 13.6666H0.999674C0.631485 13.6666 0.333008 13.3681 0.333008 13V8.33329ZM1.66634 8.99996V12.3333H4.99967V8.99996H1.66634Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.66602 8.33329C7.66602 7.9651 7.96449 7.66663 8.33268 7.66663H12.9993C13.3675 7.66663 13.666 7.9651 13.666 8.33329V13C13.666 13.3681 13.3675 13.6666 12.9993 13.6666H8.33268C7.96449 13.6666 7.66602 13.3681 7.66602 13V8.33329ZM8.99935 8.99996V12.3333H12.3327V8.99996H8.99935Z"
      fill="currentColor"
    />
  </Svg>
)

Grid.propTypes = {
  className: PropTypes.string,
}

export default Grid
