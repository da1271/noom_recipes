import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import Router from './Router'

// Create the Navbar with two links to the page
const Navigation = (props) => <nav>
  <ul>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/favorite'>Favorite</NavLink></li>
  </ul>
</nav>

class App extends Component {
  render() {
    return <div className="page-container">
      <Navigation />                                                             
      <Router />
    </div>
  }
}

export default App;
