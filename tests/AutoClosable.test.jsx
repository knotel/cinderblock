import React from 'react'
import { shallow } from 'enzyme'
import { AutoClosable } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<AutoClosable />)
  return { wrapper, props }
}

describe('AutoClosable Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<AutoClosable />)
  })
})
