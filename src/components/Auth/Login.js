// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
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
  }

  onChangeHandler = ({ target }) => {
    const { value, name } = target

    this.setState({
      [name]: value,
    })
  }

  auth = () => {
    const { login, password } = this.state
    if (!login || !password) {
      return
    }

    this.props
      .login(this.state)
      .then(() => this.props.history.push('/'))
      .catch(error => console.error(`Ошибка: ${error}`))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={ classes.loginForm }>
        <h2 className={ classes.title }>Welcom to EL Plano</h2>

        <FormControl className={ classes.margin }>
          <InputLabel htmlFor="adornment-password">Логин</InputLabel>
          <Input
            name="login"
            id="login"
            type="email"
            value={ this.state.login }
            onChange={ this.onChangeHandler }
          />
        </FormControl>

        <FormControl className={ classes.margin }>
          <InputLabel htmlFor="adornment-password">Пароль</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={ this.state.password }
            onChange={ this.onChangeHandler }
          />
        </FormControl>

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
