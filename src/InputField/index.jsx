import React from 'react'
import PropTypes from 'prop-types'
import { Container, FieldName, StyledInput, StyledTextarea, Error, ErrorIcon } from './components'

const InputField = ({
  error,
  touched,
  placeholder,
  fieldName,
  className,
  readOnly,
  width,
  additionalSize,
  multiline,
  rows,
  ...inputProps
}) => {
  const hasError = Boolean(error)

  return (
    <Container width={width} readOnly={readOnly} className={className}>
      <FieldName>{fieldName}</FieldName>
      {multiline ? (
        <StyledTextarea
          placeholder={placeholder}
          readOnly={readOnly}
          hasError={hasError}
          additionalSize={additionalSize}
          rows={rows}
          {...inputProps}
        />
      ) : (
        <StyledInput
          placeholder={placeholder}
          readOnly={readOnly}
          hasError={hasError}
          additionalSize={additionalSize}
          {...inputProps}
        />
      )}

      {hasError ? <ErrorIcon /> : null}
      <Error visible={hasError}>{error}</Error>
    </Container>
  )
}

InputField.defaultProps = {
  rows: 10
}

InputField.propTypes = {
  width: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  fieldName: PropTypes.string,
  additionalSize: PropTypes.any,
  touched: PropTypes.bool,
  readOnly: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
}

export default InputField
