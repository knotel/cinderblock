import React from 'react'
import { shallow } from 'enzyme'
import { Toast } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Toast />)
  return { wrapper, props }
}

describe('Toast Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Toast />)
  })
})
