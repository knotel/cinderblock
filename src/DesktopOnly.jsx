import styled from 'styled-components'
import media from './media'

const DesktopOnly = styled.div`
  display: none;
  ${media.md`
    display: block;
  `}
`

export default DesktopOnly
