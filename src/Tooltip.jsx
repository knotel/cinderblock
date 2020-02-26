import React, { useState, memo, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex, Text } from 'pcln-design-system'
import theme from './theme'

const TooltipText = styled(Text)`
  position: fixed;
  padding: ${theme.space[2]}px;
  overflow: hidden;
  max-width: 135px;

  ${props => props.isHandled ? css`
    visibility: visible;
    opacity: 1;
    z-index: 1000;
  ` : css`
    visibility: hidden;
    opacity: 0;
    z-index: 0;
  `}

  top: ${({ offsetY }) => offsetY}px;
  left: ${({ offsetX }) => offsetX}px;

  background-color: ${theme.colors.paragraph};
  border-radius: ${theme.radius};

  color: ${theme.colors.white};
  text-align: center;
  font-family: ${theme.font};
  font-style: normal;
  font-weight: ${theme.semiBold};
  font-size: ${theme.fontSizes[0]}px;
  line-height: 16px;
  transition: opacity ${theme.duration.normal} ${theme.timingFunctions.easeInOut};
`

const Container = styled(Flex)``

const OFFSET_POS = 8

const Tooltip = memo(({
  isVisible,
  children,
  text,
}) => {
  const element = document.getElementById('tooltip-portal')
  element.style.position = 'relative'

  const [isHandled, setIsHandled] = useState(false)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const tooltipWrapper = useRef()
  const tooltipContainer = useRef()

  useEffect(() => {
    if (isHandled && tooltipContainer.current) {
      const tooltipRect = tooltipContainer.current.getBoundingClientRect()
      const wrapperRect = tooltipWrapper.current.getBoundingClientRect()
      const windowWidth = window.innerWidth

      if (wrapperRect.top < tooltipRect.height + 150) {
        setOffsetY(wrapperRect.bottom + OFFSET_POS)
      } else {
        setOffsetY(wrapperRect.top - tooltipRect.height - OFFSET_POS)
      }

      if (windowWidth >= (wrapperRect.left + tooltipRect.width / 2)) {
        setOffsetX(wrapperRect.left - (tooltipRect.width / 2) + (wrapperRect.width / 2))
      } else {
        setOffsetX(wrapperRect.left + (tooltipRect.width / 2) - (wrapperRect.width / 2))
      }
    }
  }, [isHandled, tooltipContainer])

  const handleMouseEnter = useCallback(({ nativeEvent: { sourceCapabilities } }) => {
    if (!sourceCapabilities?.firesTouchEvents) {
      setIsHandled(true)
    }
  }, [])

  const handleOnMouseLeave = useCallback(event => {
    if (event.relatedTarget !== event.target) {
      setIsHandled(false)
    }
  }, [])

  return (
    <Container
      ref={tooltipWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      {children}
      {(isHandled && isVisible) && createPortal(
        <TooltipText
          ref={tooltipContainer}
          offsetX={offsetX}
          offsetY={offsetY}
          isHandled={isHandled}
        >
          {text}
        </TooltipText>, element)}
    </Container>
  )
})

Tooltip.propTypes = {
  children: PropTypes.node,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isVisible: PropTypes.bool
}

export default Tooltip
