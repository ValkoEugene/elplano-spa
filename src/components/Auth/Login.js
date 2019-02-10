// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { login } from '../../actions/AuthActions.js'
import LoginForm from './LoginForm'

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
})

class Login extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  }

  auth = ({ login, password }) => {
    this.props
      .login({ login, password })
      .then(() => this.props.history.push('/'))
      .catch(error => console.error(`Ошибка: ${error}`))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={ classes.loginForm }>
        <h2 className={ classes.title }>Welcom to EL Plano</h2>

        <LoginForm onSubmit={ this.auth } />
      </div>
    )
  }
}

const styles = theme => ({
  title: {
    color: theme.palette.primary.dark,
  },
  loginForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
  },
  margin: {
    marginBottom: '15px',
  },
})

export default connect(
  () => ({}),
  mapDispatchToProps
)(withRouter(withStyles(styles, { withTheme: true })(Login)))
