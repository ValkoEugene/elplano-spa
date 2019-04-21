import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.js'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { drawerWidth } from './Sidebar.js'
import { withRouter } from 'react-router'
import withWidth from '@material-ui/core/withWidth'
import Sidebar from './Sidebar.js'
import Header from './Header.js'
import Auth from './Auth'
import Confirm from './Confirm'

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
}

function MainContent({ classes, width, isAuth, location }) {
  const isMobile = Boolean(width !== 'xs')

  const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile)

  const isConfirmPage = location.pathname === '/confirm-account'

  const toggleSidebar = () => {
    setIsSidebarOpen(value => !value)
  }

  // Следим за изменением длинны экрана
  useEffect(
    () => {
      setIsSidebarOpen(isMobile)
    },
    [width]
  )

  const content = (
    <div className="App">
      <Sidebar toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen } />

      <Header toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen } />

      <main
        className={ classNames(classes.content, {
          [classes.sideOpen]: isSidebarOpen,
          [classes.sideClose]: !isSidebarOpen,
        }) }
      >
        <Routes />
      </main>
    </div>
  )

  return isAuth ? content : isConfirmPage ? <Confirm /> : <Auth />
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 56,
  },
  sideOpen: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
  },
  sideClose: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: 57,
    },
  },
})

export default withRouter(
  withStyles(styles, { withTheme: true })(withWidth()(MainContent))
)
