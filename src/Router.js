import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage'
import FavoritePage from './pages/favoritepage'

// initialize router with two pages
const Router = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/favorite' component={FavoritePage} />
  </Switch>
)

export default Router
