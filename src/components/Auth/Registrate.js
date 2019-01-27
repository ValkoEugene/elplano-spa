// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { createUser } from '../../actions/AuthActions.js'

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
})

class Registrate extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    createUser: PropTypes.func.isRequired,
  }

  state = {
    user: {
      username: '',
      email: '',
      email_confirmation: '',
      password: '',
      password_confirmation: '',
    },
    afterSubmit: false,
    validated: {
      username: false,
      email: false,
      email_confirmation: false,
      password: false,
      password_confirmation: false,
    },
  }

  // TODO найти номральный компонент для форм
  validate = name => {
    this.setState(state => {
      const validated = { ...state.validated }

      if (!state.user[name]) {
        validated[name] = false
      } else if (name === 'email_confirmation') {
        validated.email_confirmation =
          state.user.email_confirmation === state.user.email
      } else if (name === 'email') {
        validated.email = /\S+@\S+\.\S+/.test(state.user.email)
      } else if (name === 'password') {
        validated.password = state.user.password.length >= 6
      } else if (name === 'password_confirmation') {
        validated.password_confirmation =
          state.user.password_confirmation === state.user.password
      } else {
        validated[name] = true
      }

      return { validated }
    })
  }

  checkValidated = () => {
    let valid = true

    for (let key in this.state.validated) {
      if (!this.state.validated[key]) {
        valid = false
      }
    }

    return valid
  }

  onChangeHandler = ({ target }) => {
    const { value, name } = target

    this.setState(state => ({
      user: { ...state.user, [name]: value },
    }))

    this.validate(name)
  }

  signup = () => {
    this.setState({
      afterSubmit: true,
    })

    if (!this.checkValidated()) {
      return
    }

    this.props
      .createUser(this.state.user)
      .then(() => console.log('Подтверждение отправленно на указанную почту '))
      .catch(error => console.error(`Ошибка: ${error}`))
  }

  render() {
    const { classes } = this.props
    const { user, afterSubmit, validated } = this.state

    return (
      <div className={ classes.loginForm }>
        <h2 className={ classes.title }>Welcom to EL Plano</h2>

        <TextField
          required
          name="username"
          label="Логин"
          type="text"
          error={ afterSubmit && !validated.username }
          className={ classes.margin }
          value={ user.username }
          onChange={ this.onChangeHandler }
        />

        <TextField
          required
          label="Пароль"
          name="password"
          type="password"
          error={ afterSubmit && !validated.password }
          className={ classes.margin }
          value={ user.password }
          onChange={ this.onChangeHandler }
        />

        <TextField
          required
          label="Подтверждение пароля"
          name="password_confirmation"
          type="password"
          error={ afterSubmit && !validated.password_confirmation }
          className={ classes.margin }
          value={ user.password_confirmation }
          onChange={ this.onChangeHandler }
        />

        <TextField
          required
          label="Email"
          name="email"
          type="email"
          error={ afterSubmit && !validated.email }
          className={ classes.margin }
          value={ user.email }
          onChange={ this.onChangeHandler }
        />

        <TextField
          required
          label="Подтверждение Email"
          name="email_confirmation"
          type="email"
          error={ afterSubmit && !validated.email_confirmation }
          className={ classes.margin }
          value={ user.email_confirmation }
          onChange={ this.onChangeHandler }
        />

        <Button variant="contained" color="primary" onClick={ this.signup }>
          Зарегистрироваться
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
)(withRouter(withStyles(styles, { withTheme: true })(Registrate)))
