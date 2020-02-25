import React from 'react'
import styled from 'styled-components'
import { Input, Text, Flex, Box } from 'pcln-design-system'
import theme from '../theme'
import ErrorIconComponent from '../icons/Error'

export const Container = styled(Flex)`
  height: fit-content;
  width: ${props => props.width || '100%'};
  flex-direction: column;
  border-radius: ${theme.radius};
  position: relative;
  ${props =>
    props.readOnly
      ? `
    &>input,
    &>input:hover,
    &>input:focus {
      border: none;
      pointer-events: none;
      font-size: ${theme.fontSizes[2]}px;
      font-weight: 600;
    }
  `
      : ''}
`

export const StyledInput = styled(Input)`
  width: ${props => props.width || '100%'};
  height: 100%;
  font-family: ${theme.font};
  font-size: ${props =>
    props.additionalSize
      ? `${theme.fontSizes[4]}px`
      : `${theme.fontSizes[1]}px`} !important;
  padding: ${theme.space[3]}px ${theme.space[4]}px
    ${theme.space[3]}px ${theme.space[2]}px;
  line-height: 17px;
  color: ${theme.colors.text};
  border-radius: ${theme.radius};
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  ${props =>
    props.hasError
      ? `
    border: 1px solid ${theme.colors.error} !important;
    `
      : `
    border: 1px solid ${theme.colors.borderGray};
  `}
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    border-color: transparent;
  }
  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${theme.colors.primary};
  }
  &::placeholder {
    color: ${theme.colors.placeholderText};
    whitespace: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const StyledTextarea = styled.textarea`
  width: ${props => props.width || '100%'};
  height: 100%;
  font-family: ${theme.font};
  font-size: ${props =>
    props.additionalSize
      ? `${theme.fontSizes[4]}px`
      : `${theme.fontSizes[1]}px`} !important;
  padding: ${theme.space[3]}px ${theme.space[4]}px
    ${theme.space[3]}px ${theme.space[2]}px;
  line-height: 17px;
  color: ${theme.colors.text};
  border-radius: ${theme.radius};
  outline: none;
  box-shadow: none;
  box-sizing: border-box;
  ${props =>
    props.hasError
      ? `
    border: 1px solid ${theme.colors.error} !important;
    `
      : `
    border: 1px solid ${theme.colors.borderGray};
  `}
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    border-color: transparent;
  }
  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${theme.colors.primary};
  }
  &::placeholder {
    color: ${theme.colors.placeholderText};
    whitespace: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  resize: none;
`

export const FieldName = styled(Text)`
  font-family: ${theme.font};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.standard};
  color: ${theme.colors.label};
  font-size: 10px;
  margin-left: 8px;
  margin-bottom: 4px;
  user-select: none;
  text-transform: uppercase;
`

export const ErrorIconContainer = styled(Box)`
  width: 20px;
  height: 20px;
  right: ${theme.space[2]}px;
  top: calc(50% - ${theme.space[2]}px);
`

export const Error = styled(Text)`
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
  color: ${theme.colors.error};
  line-height: 15px;
  font-size: ${theme.fontSizes[0]}px;
  margin-left: ${theme.space[2] + 1}px; /* 1px because we have a border line */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
${props => props.visible ? `
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s, visibility 0.3s;
` : ''}
`

export const ErrorIcon = () => (
  <ErrorIconContainer>
    <ErrorIconComponent />
  </ErrorIconContainer>
)
