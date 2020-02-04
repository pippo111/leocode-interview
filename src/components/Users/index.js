import React, { useState, useEffect } from 'react'
import { Alert } from '@smooth-ui/core-sc'
import axios from 'axios'

import * as API from '../../constants/api'

import PageTemplate from '../PageTemplate'
import SearchBox from '../SearchBox'

const Users = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async (url) => {
      try {
        const results = await axios.get(url)

        setUsers(results.data)
      } catch (error) {
        setError(error.toString())
      }
    }

    fetchUsers(API.USERS)
  }, [])

  return (
    <PageTemplate title='Users list'>
      <SearchBox onChange={value => setSearchTerm(value)} />
      {error && <Alert variant='primary'>{error}</Alert>}
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
