import React from 'react'
import { shallow } from 'enzyme'
import { Tooltip } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<div><div id="tooltip-portal"/><Tooltip /></div>)
  return { wrapper, props }
}

describe('Tooltip Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<div><div id="tooltip-portal"/><Tooltip /></div>)
  })
})
