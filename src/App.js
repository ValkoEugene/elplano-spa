import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import withWidth from '@material-ui/core/withWidth'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import MomentUtils from '@date-io/moment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Sidebar from './components/Sidebar.js'
import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Auth from './components/Auth/index.js'
import moment from './plugins/moment'

import './global.css'

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
const ERROR_COLOR = '#d32f2f'

const theme = createMuiTheme({
  custom: {
    background: BACKGROUND_COLOR,
    success: SUCCESS_COLOR,
    warning: WARNING_COLOR,
    error: ERROR_COLOR,
    shadow: {
      main: {
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
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

App.propTypes = {
  username: PropTypes.string,
  isAuth: PropTypes.bool.isRequired,
}

function App({ isAuth, width }) {
  const isMobile = Boolean(width !== 'xs')

  const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile)

  const toggleSidebar = () => {
    setIsSidebarOpen(value => !value)
  }

  useEffect(
    () => {
      setIsSidebarOpen(isMobile)
    },
    [width]
  )

  const mainApp = (
    <div className="App">
      <Sidebar toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen } />

      <Header toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen } />

      <MainContent isSidebarOpen={ isSidebarOpen } />
    </div>
  )

  return (
    <MuiThemeProvider theme={ theme }>
      <MuiPickersUtilsProvider utils={ MomentUtils } moment={ moment }>
        <Router>
          <React.Fragment>
            <CssBaseline />

            { isAuth ? mainApp : <Auth /> }
          </React.Fragment>
        </Router>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  )
}

export default connect(mapStateToProps)(withWidth()(App))
export { theme }
