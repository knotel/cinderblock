import React from 'react'
import { shallow } from 'enzyme'
import { Modal } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Modal />)
  return { wrapper, props }
}

describe('Modal Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Modal />)
  })
})
