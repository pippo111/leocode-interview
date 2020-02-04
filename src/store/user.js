import React from 'react'
import { configure, decorate, observable, computed, action, runInAction } from 'mobx'
import axios from 'axios'

configure({ enforceActions: 'observed' })

class UserStore {
  usersList = []
  searchTerm = ''
  loading = false
  error = null

  get users () {
    return this.usersList
  }

  get searchedUsers () {
    return this.usersList.filter(
      ({ name }) => name.toLowerCase().includes(this.searchTerm.toLowerCase())
    )
  }

  setUsers (users) {
    this.usersList = users
  }

  setSearch (search) {
    this.searchTerm = search
  }

  async fetchUsers (url) {
    try {
      runInAction(() => {
        this.loading = true
      })

      const results = await axios.get(url)

      runInAction(() => {
        this.usersList = results.data
      })
    } catch (error) {
      runInAction(() => {
        this.error = error.toString()
      })
    } finally {
      runInAction(() => {
        this.loading = false
      })
    }
  }
}

decorate(UserStore, {
  usersList: observable,
  searchTerm: observable,
  loading: observable,
  error: observable,
  users: computed,
  searchedUsers: computed,
  fetchUsers: action,
  setUsers: action,
  setSearch: action
})

export default React.createContext(new UserStore())
