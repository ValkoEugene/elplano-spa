import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import Sidebar from './components/Sidebar.js'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Auth from './components/Auth/index.js'

const THEME_COLORS = {
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
}

const BACKGROUND_COLOR = '#f7f7f7'
const SUCCESS_COLOR = '#00d600'
const WARNING_COLOR = '#ff8f00'

const theme = createMuiTheme({
  custom: {
    background: BACKGROUND_COLOR,
    success: SUCCESS_COLOR,
    warning: WARNING_COLOR,
    primaryTitle: {
      fontWeight: 'bold',
      color: THEME_COLORS.primary.light,
      margin: 0,
    },
    secondaryTitle: {
      margin: 0,
      color: 'gray',
      fontSize: 14,
    },
    cardHeaderSpaceBetween: {
      background: BACKGROUND_COLOR,
      padding: 15,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
  },
  typography: {
    useNextVariants: true,
  },
  palette: THEME_COLORS,
})

const mapStateToProps = ({ user }) => {
  const { username, isAuth } = user

  return { username, isAuth }
}

class App extends Component {
  static propTypes = {
    username: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
  }

  state = {
    isSidebarOpen: true,
  }

  toggleSidebar = () => {
    this.setState(state => ({ isSidebarOpen: !state.isSidebarOpen }))
  }

  render() {
    const { isAuth } = this.props

    const mainApp = (
      <div className="App">
        <Sidebar
          toggleSidebar={ this.toggleSidebar }
          isSidebarOpen={ this.state.isSidebarOpen }
        />

        <Header
          toggleSidebar={ this.toggleSidebar }
          isSidebarOpen={ this.state.isSidebarOpen }
        />

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

export default connect(mapStateToProps)(App)
export { theme }
