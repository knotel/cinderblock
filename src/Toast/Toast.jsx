import PropTypes from 'prop-types'
import React from 'react'

import { Container, Icon, Row, Title, Message } from './components'

const initialConfig = {
  title: null,
  message: null,
  primaryColor: null,
  secondaryColor: null,
  duration: 5 * 1000 // 5seconds
}

export class Toast extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      config: initialConfig,
    }
  }

  showMessage = (config) => {
    this.setState(prevState => ({
      config: {
        ...prevState.config,
        ...config,
      },
      open: true,
    }), () => {
      const { config: { duration } } = this.state
      setTimeout(() => {
        this.hideMessage()
      }, duration)
    })
  }

  hideMessage = () => {
    this.setState({ open: false })
  }

  render () {
    const { open, config } = this.state
    const { className } = this.props

    return (
      <Container className={className} open={open}>
        <Row>
          {config.imageUrl ? <Icon src={config.imageUrl} /> : null}
          {config.Icon ? <config.Icon /> : null}
          {config.title ? <Title color={config.primaryColor}>{config.title}</Title> : null}
        </Row>
        {config && config.message ? (
          <Row>
            <Message withOffset={Boolean(config.imageUrl)} color={config.secondaryColor}>
              {config.message}
            </Message>
          </Row>
        ) : null}
      </Container>
    )
  }
}

Toast.propTypes = {
  className: PropTypes.string,
}

Toast.defaultProps = {}
