import React from 'react'
import { shallow } from 'enzyme'
import Preview from '../src/Preview'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Preview />)
  return { wrapper, props }
}

describe('Preview Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Preview />)
  })
})
