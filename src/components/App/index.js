import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import Users from '../Users'

function App () {
  return (
    <Router>
      <Route exact path={ROUTES.HOME} component={Users} />
    </Router>
  )
}

export default App
