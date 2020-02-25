/* eslint-disable-next-line */
import React from 'react'
import DoneIcon from '../icons/Done'
import ErrorIcon from '../icons/Error'
import theme from '../theme'

const singleton = Symbol('toast-singleton')
const singletonEnforcer = Symbol('toast-singleton-enforcer')

export class ToastService {
  toastRef = {
    showMessage: () => {
      console.warn('Toast not initialized yet...')
    },
    hideMessage: () => {
      console.warn('Toast not initialized yet...')
    }
  }

  config = {
    message: {
      imageUrl: null,
      Icon: DoneIcon,
      primaryColor: theme.colors.mint,
      secondaryColor: theme.colors.text,
      duration: 5 * 1000,
    },
    error: {
      imageUrl: null,
      Icon: ErrorIcon,
      primaryColor: theme.colors.danger,
      secondaryColor: theme.colors.text,
      duration: 5 * 1000,
    },
    warning: {
      imageUrl: null,
      primaryColor: theme.colors.gold,
      secondaryColor: theme.colors.text,
      duration: 5 * 1000,
    },
  }

  constructor (enforcer) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton')
    }

    this._type = 'ToastService'
  }

  static get instance () {
    if (!this[singleton]) {
      this[singleton] = new ToastService(singletonEnforcer)
    }

    return this[singleton]
  }

  static init (reference, config) {
    ToastService.instance.toastRef = reference
    if (config) {
      ToastService.setConfig(config)
    }
  }

  static setConfig (config) {
    const newConfig = {
      ...ToastService.instance.config,
      ...config,
    }

    ToastService.instance.config = newConfig
  }

  static showMessage (title = '', message = '', config = {}) {
    ToastService.instance.toastRef.hideMessage()
    ToastService.instance.toastRef.showMessage({
      title,
      message,
      ...{
        ...ToastService.instance.config.message,
        ...config
      }
    })
  }

  static showError (title = '', message = '', config = {}) {
    ToastService.instance.toastRef.hideMessage()
    ToastService.instance.toastRef.showMessage({
      title,
      message,
      ...{
        ...ToastService.instance.config.error,
        ...config
      }
    })
  }

  static showWarning (title = '', message = '', config = {}) {
    ToastService.instance.toastRef.hideMessage()
    ToastService.instance.toastRef.showMessage({
      title,
      message,
      ...{
        ...ToastService.instance.config.warning,
        ...config
      }
    })
  }

  static hideMessage () {
    ToastService.instance.toastRef.hideMessage()
  }
}
