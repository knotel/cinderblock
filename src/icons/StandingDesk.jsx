import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from '../theme'
import Icon from './Icon'

const Svg = styled(Icon)`
  width: 24px;
  height: 24px;
  color: ${theme.colors.darkBlue};
`

export const StandingDesk = ({ className }) => (
  <Svg viewBox="0 0 24 24" fill="none" className={className}>
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V8V20C22 20.5523 21.5523 21 21 21H11C10.4477 21 10 20.5523 10 20V14V9H4V20C4 20.5523 3.55228 21 3 21C2.44772 21 2 20.5523 2 20V4ZM11 7H20V5H4V7H11ZM12 9V13H20V9H12ZM20 15H12V19H20V15ZM13.4546 10.9092C13.4546 10.3569 13.9023 9.90918 14.4546 9.90918H17.7273C18.2796 9.90918 18.7273 10.3569 18.7273 10.9092C18.7273 11.4615 18.2796 11.9092 17.7273 11.9092H14.4546C13.9023 11.9092 13.4546 11.4615 13.4546 10.9092ZM14.4546 15.9092C13.9023 15.9092 13.4546 16.3569 13.4546 16.9092C13.4546 17.4615 13.9023 17.9092 14.4546 17.9092H17.7273C18.2796 17.9092 18.7273 17.4615 18.7273 16.9092C18.7273 16.3569 18.2796 15.9092 17.7273 15.9092H14.4546Z"
        fill="currentColor"
      />
    </g>
  </Svg>
)

StandingDesk.propTypes = {
  className: PropTypes.string,
}

export default StandingDesk
