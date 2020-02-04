import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { theme, Normalize } from '@smooth-ui/core-sc'
import { ThemeProvider } from 'styled-components'

import * as ROUTES from '../../constants/routes'

import Users from '../Users'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Router>
        <Route exact path={ROUTES.HOME} component={Users} />
      </Router>
    </ThemeProvider>
  )
}

export default App
