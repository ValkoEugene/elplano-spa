import React from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.js'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { drawerWidth } from './Sidebar.js'

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
}

function MainContent({ classes, isSidebarOpen }) {
  return (
    <main
      className={ classNames(classes.content, {
        [classes.sideOpen]: isSidebarOpen,
        [classes.sideClose]: !isSidebarOpen,
      }) }
    >
      <Routes />
    </main>
  )
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

export default withStyles(styles, { withTheme: true })(MainContent)
