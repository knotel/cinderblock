import React from 'react'
import { shallow } from 'enzyme'
import Button from '../src/Button'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Button />)
  return { wrapper, props }
}

describe('Button Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Button />)
  })
})
