import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { logout } from '../actions/AuthActions.js'

const mapStateToProps = ({ user }) => {
  const { name } = user

  return { name }
}

const mapDispatchToProps = dispatch => ({
  logoutAction: () => dispatch(logout()),
})

class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isSidebarOpen: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    logoutAction: PropTypes.func.isRequired,
  }

  redirectToHomePage = () => {
    this.props.history.push('/')
  }

  render() {
    const { classes, toggleSidebar, isSidebarOpen, logoutAction } = this.props

    return (
      <div className={ classes.root }>
        <AppBar
          position="fixed"
          className={ classNames(classes.appBar, {
            [classes.appBarShift]: isSidebarOpen,
          }) }
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

            <Typography variant="h6" color="inherit" className={ classes.grow }>
              <span className={ classes.logo } onClick={ this.redirectToHomePage }>
                EL Plano
              </span>
            </Typography>

            <Button color="inherit" onClick={ logoutAction }>
              Выход
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: theme.palette.primary.dark,
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
  logo: {
    cursor: 'pointer',
    transition: '.5s',
    padding: 5,
    '&:hover': {
      textShadow: '0 0 5px white, 0 0 10px white, 0 0 15px white',
    },
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles, { withTheme: true })(Header)))
