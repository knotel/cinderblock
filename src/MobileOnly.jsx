import styled from 'styled-components'
import media from './media'

const MobileOnly = styled.div`
  display: block;
  ${media.md`
    display: none;
  `}
`

export default MobileOnly
