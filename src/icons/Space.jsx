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

export const Space = ({ className }) => (
  <Svg viewBox="0 0 32 32" className={className} fill="none">
    <g>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5.16668C3 4.4303 3.59695 3.83334 4.33333 3.83334H27.6667C28.403 3.83334 29 4.4303 29 5.16668V26.8333C29 27.5697 28.403 28.1667 27.6667 28.1667H24.5556C23.8192 28.1667 23.2222 27.5697 23.2222 26.8333C23.2222 26.097 23.8192 25.5 24.5556 25.5H26.3333V6.50001H5.66667V20.5H16.7778C17.5142 20.5 18.1111 21.097 18.1111 21.8333V25.5H19.8889C20.6253 25.5 21.2222 26.097 21.2222 26.8333C21.2222 27.5697 20.6253 28.1667 19.8889 28.1667H16.7778C16.0414 28.1667 15.4444 27.5697 15.4444 26.8333V23.1667H4.33333C3.59695 23.1667 3 22.5697 3 21.8333V5.16668Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 13.5C3 12.7636 3.59695 12.1667 4.33333 12.1667H15.2222C15.9586 12.1667 16.5556 12.7636 16.5556 13.5C16.5556 14.2364 15.9586 14.8333 15.2222 14.8333H4.33333C3.59695 14.8333 3 14.2364 3 13.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15.2222 8.83334C15.9586 8.83334 16.5556 9.4303 16.5556 10.1667V16.8333C16.5556 17.5697 15.9586 18.1667 15.2222 18.1667C14.4859 18.1667 13.8889 17.5697 13.8889 16.8333V10.1667C13.8889 9.4303 14.4859 8.83334 15.2222 8.83334Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20.1111 13.5C20.1111 12.7636 20.708 12.1667 21.4444 12.1667H27.6666C28.403 12.1667 29 12.7636 29 13.5C29 14.2364 28.403 14.8333 27.6666 14.8333H22.7778V18.5C22.7778 19.2364 22.1808 19.8333 21.4444 19.8333C20.708 19.8333 20.1111 19.2364 20.1111 18.5V13.5Z" fill="currentColor" />
    </g>
  </Svg>
)

Space.propTypes = {
  className: PropTypes.string,
}

export default Space