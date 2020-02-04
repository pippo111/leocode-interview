import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ id, name, username }) => (
  <>
    <span className='main-content'>{name}</span>
    <span className='sub-content'>@{username}</span>
  </>
)

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default UserItem
