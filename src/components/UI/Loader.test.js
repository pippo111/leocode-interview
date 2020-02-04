/* global describe, test, it, expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { Loader } from '.'

describe('Loader', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Loader />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders custom caption', () => {
    const caption = 'Loading test...'

    const wrapper = mount(<Loader caption={caption} />)
    expect(wrapper.text()).toEqual(caption)
  })
})
