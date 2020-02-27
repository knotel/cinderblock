import React from 'react'
import { shallow } from 'enzyme'
import { Checkbox } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Checkbox />)
  return { wrapper, props }
}

describe('Checkbox Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Checkbox />)
  })
})
