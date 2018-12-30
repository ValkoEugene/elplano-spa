import React, { Component } from 'react'
import { BrowserRouter as Router} from "react-router-dom"
import Navbar from './components/Navbar.js'
import Routes from './components/Routes.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Routes />
        </div>
      </Router>
    )
  }
}

export default App
