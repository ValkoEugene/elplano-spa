import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import Sidebar from './components/Sidebar.js'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Auth from './components/Auth.js'

const theme = createMuiTheme({
  custom: {
    background: '#f7f7f7',
    shadow: {
      boxShadow: '0 6px 0 0 rgba(0,0,0,.01), 0 15px 32px 0 rgba(0,0,0,.06)',
      borderRadius: 8
    },
    borderRadiusTop: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    borderRadiusBottom: {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    }
  },
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#BA68C8',
      main: '#673AB7',
      dark: '#4A148C',
      contrastText: '#fff',
    },
    secondary: {
      light: '#EC407A',
      main: '#C2185B',
      dark: '#880E4F',
      contrastText: '#fff',
    },
  },
  // Стандартная
  // palette: {
  //   primary: {
  //     light: '#757ce8',
  //     main: '#3f50b5',
  //     dark: '#002884',
  //     contrastText: '#fff',
  //   },
  //   secondary: {
  //     light: '#ff7961',
  //     main: '#f44336',
  //     dark: '#ba000d',
  //     contrastText: '#000',
  //   },
  // },
})

class App extends Component {
  state = {
    isSidebarOpen: true
  }

  toggleSidebar = () => {
    this.setState(state => ({ isSidebarOpen: !state.isSidebarOpen }))
  }

  render() {
    const { isAuth } = this.props

    const mainApp = (
      <div className="App">
        <Sidebar toggleSidebar={ this.toggleSidebar } isSidebarOpen={ this.state.isSidebarOpen } />
        
        <Header toggleSidebar={ this.toggleSidebar } isSidebarOpen={ this.state.isSidebarOpen } />

        <MainContent isSidebarOpen={ this.state.isSidebarOpen } />
      </div>
    )

    return (
      <MuiThemeProvider theme={ theme }>
        <Router>
          <React.Fragment>
            <CssBaseline />

            { isAuth ? mainApp : <Auth /> }
          </React.Fragment>
        </Router>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired
}

// приклеиваем данные из store
const mapStateToProps = ({ user }) => {
  const { name, isAuth } = user
  
  return { name, isAuth }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(App)
export { theme }
