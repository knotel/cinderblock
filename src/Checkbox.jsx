import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Box } from 'pcln-design-system'
import theme from './theme'
import CloseIcon from './icons/Close'

const Holder = styled(Box)`
  width: 16px;
  height: 16px;
  border: 1px solid ${theme.colors.black};
  background: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
`

const Checkbox = ({ selected, onChange, className }) => (
  <Holder className={className} onClick={onChange}>
    {selected && (
      <CloseIcon
        color={theme.colors.text}
        height={16}
        width={16}
      />
    )}
  </Holder>
)

Checkbox.propTypes = {
  selected: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
}

export default Checkbox
