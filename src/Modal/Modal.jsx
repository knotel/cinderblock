import PropTypes from 'prop-types'
import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { Flex, Icon } from 'pcln-design-system'
import media from '../media'
import theme from '../theme'

ReactModal.setAppElement('body')

const ModalCloser = styled(Icon)`
  align-self: flex-end;
  outline: none;
  flex-shrink: 0;
  cursor: pointer;
`

const Wrapper = styled(Flex)`
  position: relative;
  flex: 1;
`

const CloseContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
`

const modalOverlayStyle = {
  zIndex: 1000000, // to overlap the header
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  transition: 'all 500ms linear',
}

const modalOverlayOnlyStyle = {
  overlay: modalOverlayStyle,
}

const modalBaseStyle = {
  overlay: modalOverlayStyle,
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '50px 40px',
    width: 'fit-content',
    minWidth: '250px',
    maxWidth: 'calc(100% - 80px - 40px)', // full width minus the padding and margins
    minHeight: 'fit-content',
    maxHeight: '50%',
  },
}

const modalBasicStyle = {
  ...modalBaseStyle,
  content: {
    ...modalBaseStyle.content,
    transform: 'translateY(-50%) translateX(-50%)',
    top: '50%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
  },
}

export const wrapModal = (WrappedComponent = ReactModal) => {
  class Modal extends React.Component {
    overlayRef = null
    contentRef = null

    overlayClicked = event => {
      if (!event.target || event.target !== this.overlayRef) {
        return
      }

      event.stopPropagation()
      // since the event is stopped from bubbling up, and reaching `onRequestClose`,
      // a manual call to `close` is needed
      this.handleClose()
    }

    contentClicked = event => {
      if (!event.target || event.target !== this.contentRef) {
        return
      }

      event.stopPropagation()
    }

    setOverlayRef = node => {
      if (!node) {
        return
      }

      this.resetOverlayRef()
      this.overlayRef = node
      this.overlayRef.addEventListener('click', this.overlayClicked, true)
    }

    setContentRef = node => {
      if (!node) {
        return
      }

      this.resetContentRef()
      this.contentRef = node
      this.contentRef.addEventListener('click', this.contentClicked, true)
    }

    /**
     * Also called when the overlay is clicked, or ESC is pressed (onRequestClose).
     *
     * If the parent component controls the visibility of the modal, it should pass the modal
     * closing function through the `close` prop that is called in `this.close`.
     */
    handleClose = () => {
      this.resetRefs()
      this.props.onRequestClose()
      this.props.close()
    }

    resetOverlayRef = () => {
      if (this.overlayRef) {
        this.overlayRef.removeEventListener('click', this.overlayClicked)
        this.overlayRef = null
      }
    }

    resetContentRef = () => {
      if (this.contentRef) {
        this.contentRef.removeEventListener('click', this.contentClicked)
        this.contentRef = null
      }
    }

    resetRefs = () => {
      this.resetOverlayRef()
      this.resetContentRef()
    }

    componentWillUnmount = () => this.resetRefs()

    render () {
      // destructure all props that don't get passed to react-modal
      // TODO: do it the other way around and explicitly pass the props `react-modal` accepts
      const { close, withCloseButton, children, ...rest } = this.props
      return (
        <WrappedComponent
          overlayRef={this.setOverlayRef}
          contentRef={this.setContentRef}
          {...rest}
          // Needs to be below ...this.props, so it overrides the default one
          onRequestClose={this.handleClose}
        >
          <Wrapper>
            {withCloseButton && (
              <CloseContainer>
                <ModalCloser
                  color={theme.colors.gray500}
                  size={28}
                  onClick={this.handleClose}
                  name="Close"
                  title=""
                  desc=""
                />
              </CloseContainer>
            )}
            {children}
          </Wrapper>
        </WrappedComponent>
      )
    }
  }

  Modal.defaultProps = {
    withCloseButton: false,
    style: modalBasicStyle,
    close: () => {},
    onRequestClose: () => {},
  }

  Modal.propTypes = {
    children: PropTypes.any,
    onRequestClose: PropTypes.func,
    close: PropTypes.func,
    withCloseButton: PropTypes.bool,
    style: PropTypes.shape(),
  }

  return Modal
}

const WrappedModal = wrapModal()

const getStyledModal = (Component = WrappedModal) => styled(Component)`
  z-index: 1000;
  background: white;
  outline: none;
  position: absolute;
  top: ${({ isSnack }) => isSnack ? '100px' : '0'};
  left: ${({ isSnack }) => isSnack ? '50%' : '0'};
  bottom: ${({ isSnack }) => isSnack ? 'auto' : '0'};
  right: ${({ isSnack }) => isSnack ? 'auto' : '0'};
  transform: ${({ isSnack }) => isSnack ? 'translateX(-50%)' : 'none'};
  overflow: auto;

  ${media.md`
    display: flex;
    min-width: ${({ isSnack }) => isSnack ? '0' : '300px'};
    min-height: ${({ isSnack }) => isSnack ? '0' : '300px'};
    max-height: 50%;
    width: auto;
    height: auto;
    top: ${({ isSnack }) => isSnack ? 'auto' : '50%'};
    left: ${({ isSnack }) => isSnack ? 'auto' : '50%'};
    bottom: ${({ isSnack }) => isSnack ? '100px' : 'auto'};
    right: ${({ isSnack }) => isSnack ? '50px' : 'auto'};
    padding: ${({ isSnack }) => isSnack ? '0' : '50px 40px'};
    transform: ${({ isSnack }) => isSnack ? 'none' : 'translateY(-50%) translateX(-50%)'};
  `}
`

const StyledModal = getStyledModal()

export const Modal = styled(StyledModal)`
  height: 100vh;
  width: 100vw;
  display: flex;

  ${media.md`
    max-width: 370px;
    width: 400px;
    padding: 0;
    height: fit-content;
    max-height: calc(100vh - 100px);
  `}

  ${CloseContainer} {
    top: 22px;
    right: 23px;
    color: ${theme.colors.placeholder};
  }

  ${media.md`
    ${ModalCloser} {
      svg {
        height: 25px;
        width: 25px;
      }
    }
  `}
`

export const ModalInner = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
`
