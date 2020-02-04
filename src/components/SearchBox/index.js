import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Form, FormField, Input } from '@smooth-ui/core-sc'

const SearchBox = ({ onChange }) => {
  const searchInput = useRef(null)

  useEffect(() => {
    searchInput.current.focus()
  }, [])

  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <FormField>
        <Input
          name='searchTerm'
          placeholder='enter user name'
          autoComplete='off'
          onChange={handleChange}
          ref={searchInput}
        />
      </FormField>
    </Form>
  )
}

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SearchBox
