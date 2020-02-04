import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from '@smooth-ui/core-sc'

const PageTemplate = ({ title, children }) => (
  <Box mx='auto' px={20} maxWidth={800}>
    {title && <Text variant='h1' textAlign='center'>{title}</Text>}
    {children}
  </Box>
)

PageTemplate.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default PageTemplate
