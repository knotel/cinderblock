import React from 'react'
import { shallow } from 'enzyme'
import { Tag } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Tag />)
  return { wrapper, props }
}

describe('Tag Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Tag />)
  })
})
