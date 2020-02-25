import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 12px;
  height: 10px;
  color: ${theme.colors.spaceBlue};
`

export const List = ({ className }) => (
  <Svg viewBox="0 0 12 10" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.33301 1.00004C3.33301 0.631851 3.65636 0.333374 4.05523 0.333374H11.2775C11.6763 0.333374 11.9997 0.631851 11.9997 1.00004C11.9997 1.36823 11.6763 1.66671 11.2775 1.66671H4.05523C3.65636 1.66671 3.33301 1.36823 3.33301 1.00004ZM3.33301 5.00004C3.33301 4.63185 3.65636 4.33337 4.05523 4.33337H11.2775C11.6763 4.33337 11.9997 4.63185 11.9997 5.00004C11.9997 5.36823 11.6763 5.66671 11.2775 5.66671H4.05523C3.65636 5.66671 3.33301 5.36823 3.33301 5.00004ZM3.33301 9.00004C3.33301 8.63185 3.65636 8.33337 4.05523 8.33337H11.2775C11.6763 8.33337 11.9997 8.63185 11.9997 9.00004C11.9997 9.36823 11.6763 9.66671 11.2775 9.66671H4.05523C3.65636 9.66671 3.33301 9.36823 3.33301 9.00004Z"
      fill="currentColor"
    />
    <circle cx="0.666667" cy="1.00004" r="0.666667" fill="currentColor" />
    <ellipse
      cx="0.666667"
      cy="5.00004"
      rx="0.666667"
      ry="0.666667"
      fill="currentColor"
    />
    <ellipse
      cx="0.666667"
      cy="9.00004"
      rx="0.666667"
      ry="0.666667"
      fill="currentColor"
    />
  </Svg>
)

List.propTypes = {
  className: PropTypes.string,
}

export default List
