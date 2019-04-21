import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Login from './Login'
import Registrate from './Registrate'
import { logout } from '../../actions/AuthActions.js'
import { unsetTokens } from '../../plugins/token'
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
})

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

function Auth({ classes, history }) {
  const [atciveTab, setActiveTab] = useState(0)

  const onChangeHandler = (event, value) => {
    setActiveTab(value)
  }

  useEffect(() => {
    history.push('/auth')
  }, [])

  return (
    <div className={ classes.authContainer }>
      <div className={ classes.authContent }>
        <div className={ classes.authAbout }>
          <h2 className={ classes.title }>Welcom to EL Plano</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <Paper className={ classes.tabsWrapper }>
          <Tabs
            value={ atciveTab }
            indicatorColor="primary"
            textColor="primary"
            fullWidth={ true }
            classes={ { root: classes.tabsRoot } }
            onChange={ onChangeHandler }
          >
            <Tab label="Вход" className={ classes.tab } />
            <Tab label="Регистрация" className={ classes.tab } />
          </Tabs>
          { atciveTab === 0 && <Login /> }
          { atciveTab === 1 && <Registrate /> }
        </Paper>
      </div>
    </div>
  )
}

const styles = theme => ({
  title: {
    color: theme.palette.primary.dark,
  },
  authContainer: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContent: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: { width: '100%', flexDirection: 'row' },
  },
  authAbout: {
    [theme.breakpoints.up('sm')]: { width: '35%' },
  },
  tabsWrapper: {
    [theme.breakpoints.up('sm')]: { width: '40%' },
  },
  tab: {
    width: '50%',
  },
  tabsRoot: {
    width: '100%',
  },
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles, { withTheme: true })(Auth)))
