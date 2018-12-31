import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import Sidebar from './components/Sidebar.js'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'


class App extends Component {
  state = {
    isSidebarOpen: true
  }

  toggleSidebar = () => {
    this.setState(state => ({ isSidebarOpen: !state.isSidebarOpen }))
  }

  render() {
    const theme = createMuiTheme({
      typography: {
        useNextVariants: true,
      },
      palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#ba000d',
          contrastText: '#000',
        },
      },
    })

    return (
      <MuiThemeProvider theme={ theme }>
        <Router>
          <React.Fragment>
            <CssBaseline />

            <div className="App">
              <Sidebar toggleSidebar={ this.toggleSidebar } isSidebarOpen={ this.state.isSidebarOpen } />
              
              <Header toggleSidebar={ this.toggleSidebar } isSidebarOpen={ this.state.isSidebarOpen } />

              <MainContent isSidebarOpen={ this.state.isSidebarOpen } />
            </div>
          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
