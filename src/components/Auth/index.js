import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'
import Login from './Login'
import Registrate from './Registrate'

class Auth extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    atciveTab: 0,
  }

  onChangeHandler = (event, value) => {
    this.setState({
      atciveTab: value,
    })
  }

  render() {
    const { classes } = this.props
    const { atciveTab } = this.state

    return (
      <div className={ classes.authContainer }>
        <Paper className={ classes.tabsWrapper }>
          <Tabs
            value={ atciveTab }
            indicatorColor="primary"
            textColor="primary"
            fullWidth={ true }
            classes={ { root: classes.tabsRoot } }
            onChange={ this.onChangeHandler }
          >
            <Tab label="Вход" className={ classes.tab } />
            <Tab label="Регистрация" className={ classes.tab } />
          </Tabs>
          { atciveTab === 0 && <Login /> }
          { atciveTab === 1 && <Registrate /> }
        </Paper>
      </div>
    )
  }
}

const styles = theme => ({
  title: {
    color: theme.palette.primary.dark,
  },
  authContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    background: `linear-gradient(110deg, ${theme.palette.primary.light} 60%, ${
      theme.palette.primary.dark
    } 60%)`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabsWrapper: {
    width: '50%',
  },
  tab: {
    width: '50%',
  },
  tabsRoot: {
    width: '100%',
  },
})

export default withRouter(withStyles(styles, { withTheme: true })(Auth))
