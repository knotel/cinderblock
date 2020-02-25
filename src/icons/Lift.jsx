import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 20px;
  height: 20px;
  color: ${theme.colors.darkBlue};
`

export const Lift = ({ className }) => (
  <Svg viewBox="0 0 20 20" fill="none" className={className}>
    <g>
      <path d="M15 9.0415H20L17.5 5.0415L15 9.0415Z" fill="currentColor" />
      <path d="M15 11.6528H20L17.5 15.6528L15 11.6528Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.956522 0C0.428249 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.428249 20 0.956522 20H6.95652H7.04348H13.0435C13.5718 20 14 19.593 14 19.0909V0.909091C14 0.407014 13.5718 0 13.0435 0H7.04348H6.95652H0.956522ZM6 1.81818H1.91304V18.1818H6V1.81818ZM8 18.1818V1.81818H12.087V18.1818H8Z"
        fill="currentColor"
      />
    </g>
  </Svg>
)

Lift.propTypes = {
  className: PropTypes.string,
}

export default Lift
