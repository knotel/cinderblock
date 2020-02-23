import React from 'react'
import { shallow } from 'enzyme'
import AppBar from '../src/AppBar'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<AppBar />)
  return { wrapper, props }
}

describe('AppBar Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<AppBar />)
  })
})
