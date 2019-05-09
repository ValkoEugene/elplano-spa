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
import pagesSettings from '../pagesSettings'

MainContent.propTypes = {
  classes: PropTypes.object.isRequired,
}

function MainContent({ classes, width, isAuth, location, history }) {
  const [showLayout, setShowLayout] = useState(false)

  /**
   * Получить конфиг с настройками для текущей страницы
   * @returns {Object}
   */
  const getCurrentPageSetting = () => {
    return pagesSettings.find(page => page.path === location.pathname)
  }

  /**
   * Инициализировать показ лайаута
   */
  const initLayout = () => {
    const currentPageSettings = getCurrentPageSetting()

    if (!currentPageSettings) {
      setShowLayout(false)
      return
    }

    setShowLayout(currentPageSettings.layout || false)
  }

  /**
   * Редирект на логин если находимся на странице с лауйатом и не залогиненны
   */
  useEffect(() => {
    const currentPageSettings = getCurrentPageSetting()

    if (!currentPageSettings) {
      return
    }

    if (!isAuth && currentPageSettings.layout) {
      history.push('/auth')
    }
  })

  /**
   * Следим за показом лайаута
   */
  useEffect(
    () => {
      initLayout()
    },
    [location.pathname]
  )

  /**
   * Флаг просмотра через смартфоны
   * @type {Boolean}
   */
  const isMobile = Boolean(width !== 'xs')

  const [isSidebarOpen, setIsSidebarOpen] = useState(isMobile)

  /**
   * Открыть/закрыть sidebar
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(value => !value)
  }

  /**
   * Следим за изменением длинны экрана
   */
  useEffect(
    () => {
      setIsSidebarOpen(isMobile)
    },
    [width]
  )

  return (
    <div className="App">
      { showLayout && (
        <Sidebar toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen } />
      ) }

      { showLayout && (
        <Header toggleSidebar={ toggleSidebar } isSidebarOpen={ isSidebarOpen } />
      ) }

      <main
        className={ classNames(classes.content, {
          [classes.sideOpen]: isAuth && isSidebarOpen,
          [classes.sideClose]: isAuth && !isSidebarOpen,
        }) }
      >
        <Routes />
      </main>
    </div>
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

export default withRouter(
  withStyles(styles, { withTheme: true })(withWidth()(MainContent))
)
