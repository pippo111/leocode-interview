import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@smooth-ui/core-sc'

const Loader = ({ caption = 'Loading...' }) => (
  <Box textAlign='center'>{caption}</Box>
)

Loader.propTypes = {
  caption: PropTypes.string
}

export default Loader
