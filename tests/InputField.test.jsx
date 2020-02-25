import React from 'react'
import { shallow } from 'enzyme'
import { InputField } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<InputField />)
  return { wrapper, props }
}

describe('InputField Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<InputField />)
  })
})
