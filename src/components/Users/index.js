import React, { useState, useEffect } from 'react'

import usersJson from '../../constants/users.json'

import PageTemplate from '../PageTemplate'
import SearchBox from '../SearchBox'

const Users = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setUsers(usersJson)
  }, [])

  return (
    <PageTemplate title='Users list'>
      <SearchBox onChange={value => setSearchTerm(value)} />
      <ol>
        {users
          .filter(({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(({ id, name, username }) => (
            <li key={id}>{name} @{username}</li>
          ))}
      </ol>
    </PageTemplate>
  )
}

export default Users
