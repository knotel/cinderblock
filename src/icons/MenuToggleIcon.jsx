import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'pcln-design-system'

import media from '../media'

export const width = 50
const Wrapper = styled(Box)`
  position: fixed;
  top: 9px;
  right: 3px;
  display: inline-flex;
  height: 50px;
  width: ${width}px;
  cursor: pointer;
  transform: ${props => props.menuOpen
  ? 'rotate(90deg)'
  : 'rotate(0deg)'};
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0.2s;
  z-index: 52;

  ${media.md`
    position: relative;
    top: 0;
    right: 0;
    width: 40px;
  `}
`

const MenuIcon = styled(Box)`
  width: 18px;
  height: 8px;
  position: relative;
  display: block;
  margin: -4px auto 0;
  top: 50%;
  transition-delay: 0.2s;
`

const Bar = styled(Box)`
  width: 100%;
  height: 2px;
  display: block;
  position: relative;
  background: ${({ theme }) => theme.colors.placeholder};
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition-delay: 0.2s;
  ${({ menuOpen }) => menuOpen && `
    transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    transition-delay: 0.2s;
  `}
`

const TopBar = styled(Bar)`
  transform: ${props => props.menuOpen
    ? 'translateY(4px) rotate(45deg)'
    : 'translateY(0px) rotate(0deg)'};
`

const BottomBar = styled(Bar)`
  margin-top: -2px;
  transform: ${props => props.menuOpen
    ? 'translateY(4px) rotate(-45deg);'
    : 'translateY(6px) rotate(0deg)'};
`

const MenuToggleIcon = ({ menuOpen, onClick }) => (
  <Wrapper onClick={onClick} menuOpen={menuOpen}>
    <MenuIcon>
      <TopBar menuOpen={menuOpen} />
      <BottomBar menuOpen={menuOpen} />
    </MenuIcon>
  </Wrapper>
)

MenuToggleIcon.propTypes = {
  menuOpen: PropTypes.bool,
  onClick: PropTypes.func
}

export default MenuToggleIcon
