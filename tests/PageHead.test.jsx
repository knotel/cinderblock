import React from 'react'
import { shallow } from 'enzyme'
import { PageHead } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<PageHead />)
  return { wrapper, props }
}

describe('PageHead Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<PageHead />)
  })
})
