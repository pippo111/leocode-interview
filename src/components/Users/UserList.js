import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'
import { StyledList } from '../Styled'

const UserList = ({ users = [] }) => (
  <StyledList>
    <ol>
      {users.map(user => <li key={user.id}><UserItem {...user} /></li>)}
    </ol>
  </StyledList>
)

UserList.propTypes = {
  users: PropTypes.array
}

export default UserList
