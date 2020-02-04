/* global describe, test, expect */
import React from 'react'
import renderer from 'react-test-renderer'

import UserItem from './UserItem'

describe('UserItem', () => {
  test('snapshot renders', () => {
    const user = { id: 1, name: 'Test', username: 'test' }
    const component = renderer.create(<UserItem {...user} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
