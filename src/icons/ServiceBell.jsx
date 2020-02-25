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

export const ServiceBell = ({ className }) => (
  <Svg viewBox="0 0 20 20" fill="none" className={className}>
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2V3.32179C3.93044 3.81988 0 8.06737 0 13.2729V15.7275C0 16.2798 0.447715 16.7275 1 16.7275H19C19.5523 16.7275 20 16.2798 20 15.7275V13.2729C20 8.06737 16.0696 3.81988 11 3.32179V2H13.2727C13.825 2 14.2727 1.55228 14.2727 1C14.2727 0.447715 13.825 0 13.2727 0H10H6.72729C6.17501 0 5.72729 0.447715 5.72729 1C5.72729 1.55228 6.17501 2 6.72729 2H9ZM10 5.27295C5.56138 5.27295 2 8.83432 2 13.2729V14.7275H18V13.2729C18 8.83432 14.4386 5.27295 10 5.27295Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 19C0 18.4477 0.447715 18 1 18H19C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19Z"
        fill="currentColor"
      />
    </g>
  </Svg>
)

ServiceBell.propTypes = {
  className: PropTypes.string,
}

export default ServiceBell
