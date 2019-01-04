import menuItems from '../menuItems.js'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import SidebarItem from './SidebarItem.js'

const drawerWidth = 240

const styles = theme => ({
  root: {
    display: 'flex',
  },
  sidebarBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'url(images/sidebar_bg.jpg)',
    opacity: 0.1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    backgroundImage: 'linear-gradient(45deg,#673ab7,#c2185b)'
  },
  drawerOpen: {
    ...theme.custom.shadow,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    ...theme.custom.shadow,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
})

class Sidebar extends React.Component {
  state = {
    screenWidth: ''
  }

  setScreenWidth = screenWidth => {
    this.setState({ screenWidth })
  }

  componentDidMount() {
    this.setScreenWidth(document.documentElement.clientWidth)
  }

  render () {
    const { isSidebarOpen, toggleSidebar, classes, theme } = this.props
    const { screenWidth } = this.state

    const drawerType = screenWidth > 600 ? 'permanent' : 'temporary'

    const links = [...menuItems]
      .filter(menuItem => menuItem.sidebar)
      .map(menuItem => <SidebarItem menuItem={ menuItem } key={ menuItem.path }/>)
    
    return (
      <Drawer
        variant={ drawerType }
        className={classNames(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        })}
        classes={{
          paper: classNames({
            [classes.drawerOpen]: isSidebarOpen,
            [classes.drawerClose]: !isSidebarOpen,
          }),
        }}
        open={ isSidebarOpen }
      >
        <div className={ classes.sidebarBg } />
        <div className={classes.toolbar}>
          <IconButton onClick={ toggleSidebar }>
            { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon /> }
          </IconButton>
        </div>

        <List component="nav">
          { links }
        </List>
      </Drawer>
    )
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar)
export { drawerWidth }

