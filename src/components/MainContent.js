import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.js'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { drawerWidth } from './Sidebar.js'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 56
  },
  // TODO: Нужно только для дектопной версии
  sideOpen: {
    marginLeft: drawerWidth
  },
  sideClose: {
    marginLeft: 57
  },
})

class MainContent extends React.Component {
  render() {
    const { classes, isSidebarOpen } = this.props

    return (
      <main 
        className={classNames(classes.content, {
          [classes.sideOpen]: isSidebarOpen,
          [classes.sideClose]: !isSidebarOpen,
        })}
      >

        <Routes />
      </main>
    )
  }
}

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
}

export default withStyles(styles, { withTheme: true })(MainContent)