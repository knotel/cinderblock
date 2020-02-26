import React from 'react'
import { shallow } from 'enzyme'
import { Loader } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Loader />)
  return { wrapper, props }
}

describe('Loader Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Loader />)
  })
})
