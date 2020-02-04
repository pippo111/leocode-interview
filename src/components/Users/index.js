import React from 'react'

import PageTemplate from '../PageTemplate'
import SearchBox from '../SearchBox'

const Users = () => (
  <PageTemplate title='Users list'>
    <SearchBox onChange={value => console.log(value)} />
  </PageTemplate>
)

export default Users
