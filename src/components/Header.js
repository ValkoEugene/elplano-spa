import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class Header extends React.Component {
  render() {
    const { classes, toggleSidebar, isSidebarOpen } = this.props
    

    return (
      <div className={ classes.root }>
        <AppBar 
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: isSidebarOpen,
          })}
        >
          <Toolbar>

            <IconButton
              className={ classes.menuButton }
              color="inherit"
              aria-label="Menu"
              onClick={ toggleSidebar }
            >
              <MenuIcon />
            </IconButton>
            
            <Typography
              variant="h6"
              color="inherit"
              className={ classes.grow }
            >
              EL Plano
            </Typography>

            <Button color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default withStyles(styles, { withTheme: true })(Header)