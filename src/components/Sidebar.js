import pagesSettings from '../pagesSettings.js'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import withWidth from '@material-ui/core/withWidth'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import SidebarItem from './SidebarItem.js'

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

function Sidebar({ isSidebarOpen, toggleSidebar, classes, theme, width }) {
  const [screenWidth, setScreenWidth] = useState('')

  useEffect(() => {
    setScreenWidth(document.documentElement.clientWidth)
  })

  const isMobile = screenWidth < 600

  const drawerType = !isMobile ? 'permanent' : 'temporary'

  const closeSidebar = () => {
    if (isSidebarOpen && isMobile) toggleSidebar()
  }

  const links = [...pagesSettings]
    .filter(menuItem => menuItem.sidebar)
    .map(menuItem => <SidebarItem menuItem={ menuItem } key={ menuItem.path } />)

  return (
    <Drawer
      variant={ drawerType }
      className={ classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpen,
        [classes.drawerClose]: !isSidebarOpen,
      }) }
      classes={ {
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        }),
      } }
      open={ isSidebarOpen }
    >
      <div className={ classes.sidebarBg } />
      <div className={ classes.toolbar }>
        <IconButton onClick={ toggleSidebar }>
          { theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          ) }
        </IconButton>
      </div>

      <List component="nav" onClick={ closeSidebar }>
        { links }
      </List>
    </Drawer>
  )
}

const drawerWidth = 240

const styles = theme => ({
  sidebarBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'url(images/sidebar_bg.jpg)',
    opacity: 0.1,
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
    backgroundImage: 'linear-gradient(45deg,#673ab7,#c2185b)',
  },
  drawerOpen: {
    backgroundImage: 'linear-gradient(45deg,#c2185b,#ba68c8)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundImage: 'linear-gradient(45deg,#c2185b,#ba68c8)',
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

export default withWidth()(withStyles(styles, { withTheme: true })(Sidebar))
export { drawerWidth }
