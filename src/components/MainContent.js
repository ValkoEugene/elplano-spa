import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Routes from './Routes.js'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { drawerWidth } from './Sidebar.js'

class MainContent extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isSidebarOpen: PropTypes.bool.isRequired,
  }

  render() {
    const { classes, isSidebarOpen } = this.props

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
}

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginTop: 56,
  },
  // TODO: Нужно только для дектопной версии
  sideOpen: {
    marginLeft: drawerWidth,
  },
  sideClose: {
    marginLeft: 57,
  },
})

export default withStyles(styles, { withTheme: true })(MainContent)
