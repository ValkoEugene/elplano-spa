// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { login } from '../../actions/AuthActions.js'

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
})

class Login extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
  }

  state = {
    login: '',
    password: '',
    afterSubmit: false,
  }

  onChangeHandler = ({ target }) => {
    const { value, name } = target

    this.setState({
      [name]: value,
    })
  }

  auth = () => {
    this.setState({
      afterSubmit: true,
    })

    const { login, password } = this.state

    if (!login || !password || password.length < 6) {
      return
    }

    this.props
      .login({ login, password })
      .then(() => this.props.history.push('/'))
      .catch(error => console.error(`Ошибка: ${error}`))
  }

  render() {
    const { classes } = this.props
    const { login, password, afterSubmit } = this.state

    return (
      <div className={ classes.loginForm }>
        <h2 className={ classes.title }>Welcom to EL Plano</h2>

        <TextField
          required
          name="login"
          label="Логин"
          type="text"
          error={ afterSubmit && !login }
          className={ classes.margin }
          value={ login }
          onChange={ this.onChangeHandler }
        />

        <TextField
          required
          name="password"
          label="Пароль"
          type="password"
          error={ afterSubmit && (!password || password.length < 6) }
          className={ classes.margin }
          value={ password }
          onChange={ this.onChangeHandler }
        />

        <Button variant="contained" color="primary" onClick={ this.auth }>
          Войти
        </Button>
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
