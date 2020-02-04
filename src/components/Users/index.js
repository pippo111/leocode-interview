import React, { useState, useEffect } from 'react'
import { Alert } from '@smooth-ui/core-sc'
import axios from 'axios'

import * as API from '../../constants/api'

import SearchBox from '../SearchBox'
import UserList from './UserList'
import { Loader, Page } from '../UI'

function filterUsers (users, searchTerm) {
  return users.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()))
}

const Users = () => {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async (url) => {
      setLoading(true)

      try {
        const results = await axios.get(url)
        setUsers(results.data)
      } catch (error) {
        setError(error.toString())
      } finally {
        setLoading(false)
      }
    }

    fetchUsers(API.USERS)
  }, [])

  return (
    <Page title='Users list'>
      <SearchBox onChange={value => setSearchTerm(value)} />
      {error && <Alert variant='primary'>{error}</Alert>}
      {loading && <Loader caption='Loading users...' />}
      <UserList users={filterUsers(users, searchTerm)} />
    </Page>
  )
}

export default Users
