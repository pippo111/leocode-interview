import React from 'react'
import { Form, FormField, Input } from '@smooth-ui/core-sc'

const SearchBox = ({ onChange }) => {
  const handleChange = e => {
    onChange(e.target.value)
  }

  return (
    <Form>
      <FormField>
        <Input
          name='searchTerm'
          placeholder='enter user name'
          autoComplete='off'
          onChange={handleChange}
        />
      </FormField>
    </Form>
  )
}

export default SearchBox
