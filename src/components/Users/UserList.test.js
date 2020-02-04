/* global describe, test, it, expect */
import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import UserList from './UserList'

const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  }
]

describe('UserList', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<UserList users={users} />)
    const tree = component.toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('renders list of users', () => {
    const component = mount(<UserList users={users} />)

    expect(component.find('li').length).toEqual(users.length)
  })
})
