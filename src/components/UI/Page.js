import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from '@smooth-ui/core-sc'

const PageTemplate = ({ title, children }) => (
  <Box
    my={3}
    mx='auto'
    p={20}
    maxWidth={800}
    border='1px solid lightgray'
    borderRadius={8}
    boxShadow='0px 0px 14px 0px rgba(170,170,170,1)'
  >
    {title && <Text variant='h1' textAlign='center'>{title}</Text>}
    {children}
  </Box>
)

PageTemplate.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default PageTemplate
