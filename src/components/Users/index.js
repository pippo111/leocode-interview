import React, { useEffect, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Alert } from '@smooth-ui/core-sc'

import * as API from '../../constants/api'

import { UserStore } from '../../store'
import SearchBox from '../SearchBox'
import UserList from './UserList'
import { Loader, Page } from '../UI'

const Users = ({ data, loading, error }) => {
  const store = useContext(UserStore)

  useEffect(() => {
    store.fetchUsers(API.USERS)
  }, [])

  return (
    <Page title='Users list'>
      <SearchBox onChange={value => store.setSearch(value)} />
      {store.error && <Alert variant='primary'>{store.error}</Alert>}
      {store.loading && <Loader caption='Loading users...' />}
      <UserList users={store.searchedUsers} />
    </Page>
  )
}

export default observer(Users)
