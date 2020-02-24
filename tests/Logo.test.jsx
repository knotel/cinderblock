import React from 'react'
import { shallow } from 'enzyme'
import { Logo } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Logo />)
  return { wrapper, props }
}

describe('Logo Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Logo />)
  })
})
