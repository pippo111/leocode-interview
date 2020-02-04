import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'

const UserList = ({ users = [] }) => (
  <ol>
    {users.map(user => <li key={user.id}><UserItem {...user} /></li>)}
  </ol>
)

UserList.propTypes = {
  users: PropTypes.array
}

export default UserList
