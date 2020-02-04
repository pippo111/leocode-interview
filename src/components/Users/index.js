import React, { useState } from 'react'
import { Alert } from '@smooth-ui/core-sc'

import * as API from '../../constants/api'

import SearchBox from '../SearchBox'
import UserList from './UserList'
import { Loader, Page } from '../UI'
import withFetcher from '../Fetcher'

function filterUsers (users, searchTerm) {
  return users.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase()))
}

const Users = ({ data, loading, error }) => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <Page title='Users list'>
      <SearchBox onChange={value => setSearchTerm(value)} />
      {error && <Alert variant='primary'>{error}</Alert>}
      {loading && <Loader caption='Loading users...' />}
      {data && <UserList users={filterUsers(data, searchTerm)} />}
    </Page>
  )
}

export default withFetcher(API.USERS)(Users)
