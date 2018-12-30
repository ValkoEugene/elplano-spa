import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Auth from './components/Auth.js'
import Home from './components/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/auth/">auth</Link>
              </li>
              <li>
                <Link to="/home/">home</Link>
              </li>
            </ul>
          </nav>
        

          <Route path="/" exact component={Home} />
          <Route path="/home/" component={Home} />
          <Route path="/auth/" component={Auth} />
        </div>
      </Router>
    )
  }
}

export default App
