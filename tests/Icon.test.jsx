import React from 'react'
import { shallow } from 'enzyme'
import { Icon } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Icon />)
  return { wrapper, props }
}

describe('Icon Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Icon />)
  })
})
