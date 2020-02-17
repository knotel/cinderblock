import React, { useState, useCallback, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex, Text } from 'pcln-design-system'

import media from './media'

const OFFSET_FROM_CONTAINER = 16

export const DropdownWrapper = styled(Flex)`
  width: fit-content;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const DropdownList = styled(Flex)`
  display: ${({ isShow }) => isShow ? 'flex' : 'none'};
  position: fixed;
  margin: ${({ theme }) => theme.space[3]}px;
  bottom: ${({ offsetY }) => offsetY}px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadows[1]};
  outline: none;

  ${({ theme }) => theme.mediaQueries.md} {
    bottom: auto;
    top: ${({ offsetY }) => offsetY}px;
    ${({ isOffsetX }) => isOffsetX
      ? css`left: 0;`
      : css`right: 0;`};
  }

  ${media.md`
    top: 64px;
    right: -15px;
    width: 160px;
  `}
`

export const StyledLink = styled.a`
  display: inline-flex;
  min-width: 200px;
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  line-height: 18px;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space[3]}px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`

const StyledTitle = styled(Text)`
  font-family: ${({ theme }) => theme.font};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 18px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.placeholder};
  padding: ${({ theme }) => `${theme.space[3]}px ${theme.space[3]}px ${theme.space[2]}px ${theme.space[3]}px`};
`

const Dropdown = ({ children, options, title }) => {
  const [isShow, setIsShow] = useState(false)
  const [offsetY, setOffsetY] = useState(0)
  const [isOffsetX, setIsOffsetX] = useState(false)
  const [mouseOver, setMouseOver] = useState(false)

  const containerRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    if (listRef.current && containerRef.current) {
      const containerBound = containerRef.current.getBoundingClientRect()
      const listBound = listRef.current.getBoundingClientRect()

      if (containerBound.left < listBound.width) {
        setIsOffsetX(true)
      } else {
        setIsOffsetX(false)
      }

      if (containerBound.bottom < listBound.height + OFFSET_FROM_CONTAINER) {
        setOffsetY(listBound.height + OFFSET_FROM_CONTAINER)
      } else {
        setOffsetY(containerBound.height + OFFSET_FROM_CONTAINER)
      }
    }
    if (isShow) {
      listRef.current.focus()
    }
  }, [isShow])

  const handleClick = useCallback((e) => {
    setIsShow(!isShow)
  }, [isShow, setIsShow])
  const handleMouseEnter = useCallback(() => setMouseOver(true), [setMouseOver])
  const handleMouseLeave = useCallback(() => setMouseOver(false), [setMouseOver])
  const handleBlur = useCallback((e) => {
    if (!mouseOver && isShow) {
      setIsShow(false)
    }
  }, [mouseOver, isShow])

  return (
    <DropdownWrapper
      onClick={handleClick}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        React.Children.map(children, child =>
          React.cloneElement(child, { menuOpen: isShow })
        )
      }
      <DropdownList
        tabIndex="0"
        ref={listRef}
        isShow={isShow}
        isOffsetX={isOffsetX}
        offsetY={offsetY}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {title ? (<StyledTitle>{title}</StyledTitle>) : null}
        {options}
      </DropdownList>
    </DropdownWrapper>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.node,
  title: PropTypes.string,
}

export default Dropdown
