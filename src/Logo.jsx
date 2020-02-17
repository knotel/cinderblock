import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import theme from './theme'
import Icon from './icons/Icon'

const Svg = styled(Icon)`
  width: 136px;
  height: 28px;

  color: ${() => theme.colors.black};
`

export const KnotelLogo = ({ className }) => (
  <Svg viewBox="0 0 136 28" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.24249 3.78857V25.2114L11.3002 16.7102L16.6802 24.132H24.0615L15.4923 12.645L24.1258 3.78857H16.5623L8.99601 11.8928V3.78857H3.24249Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.1233 3.78809V24.1318H32.4973V12.3445L41.9279 24.1318H46.8155V3.78809H41.4628V15.3496L32.399 3.78809H27.1233Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M75.317 3.77271V8.99751H81.3215V24.1315H87.1905V8.99751H93.1641V3.77271H75.317Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M112.653 3.77295H96.9364V24.1311H112.653V19.3315H102.538V16.2431H109.757V11.6543H102.538V8.6075H112.653V3.77295Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M117.13 24.1315H123.632V3.77271H117.13V24.1315Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M132.737 15.1428L123.631 24.1315H132.737V15.1428Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62.0797 8.17466C58.8849 8.17466 56.2858 10.7668 56.2858 13.9518C56.2858 17.1371 58.8849 19.7292 62.0797 19.7292C65.2741 19.7292 67.8743 17.1371 67.8743 13.9518C67.8743 10.7668 65.2741 8.17466 62.0797 8.17466ZM73.1627 13.9773C73.1627 20.0803 68.2007 25.0275 62.0797 25.0275C55.9586 25.0275 50.9963 20.0803 50.9963 13.9773C50.9963 7.87436 55.9586 2.92676 62.0797 2.92676C68.2007 2.92676 73.1627 7.87436 73.1627 13.9773Z"
      fill="currentColor"
    />
  </Svg>
)

KnotelLogo.propTypes = {
  className: PropTypes.string,
}

export default KnotelLogo
