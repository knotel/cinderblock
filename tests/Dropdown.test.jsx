import React from 'react'
import { shallow } from 'enzyme'
import { Dropdown, theme } from '../src'

function setup() {
  const props = {
    className: 'js-logo',
  };
  const wrapper = shallow(<Dropdown><div>Click me.</div></Dropdown>)
  return { wrapper, props }
}

describe('Dropdown Test Suite', () => {
  it('Renders without crashing', () => {
    shallow(<Dropdown><div>Click me.</div></Dropdown>)
  })
  it('Has the right colors', () => {
    expect(!!theme.colors.text).toBe(true)
    expect(!!theme.colors.placeholder).toBe(true)
  })
})
