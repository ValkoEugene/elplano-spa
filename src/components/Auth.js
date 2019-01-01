import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { loginRequest } from '../api/index.js'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Paper from '@material-ui/core/Paper'
import { login } from '../actions/AuthActions.js'

const styles = theme => ({
  title: {  
    color: theme.palette.primary.dark
  },
  authContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    background: `linear-gradient(110deg, ${theme.palette.primary.light} 60%, ${theme.palette.primary.dark} 60%)`,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginWrapper: {
    display: 'flex',
    height: '50%',
    width:' 50%',
  },
  loginForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
  },
  margin: {
    marginBottom: '15px'
  },
})

class Auth extends React.Component {
  state = {
    login: '',
    password: '',
  }

  componentWillMount() {
    this.props.history.push('/auth')
  }

  onChangeHandler = ({ target }) => {
    const { value, name } = target

    this.setState({
      [name]: value
    })
  }

  auth = () => {
    const { login, password } = this.state
    if (!login || !password) {
      return
    }

    loginRequest({ login, password })
      .then(({ login }) => {
        this.props.loginAction(login)
        // TODO: Вызывать из redux
        this.props.history.push('/')
      })
      .catch(error => console.error(`Ошибка: ${error}`))
  }
  
  render() {
    const { classes } = this.props

    return (
      <div className={ classes.authContainer }>
        <Paper className={ classes.loginWrapper }>
          <div className={ classes.loginForm }>
            <h2 className={ classes.title }>Welcom to EL Plano</h2>

            <FormControl className={ classes.margin }>
              <InputLabel htmlFor="adornment-password">Логин</InputLabel>
              <Input
                name="login"
                id="login"
                type="email"
                value={this.state.login}
                onChange={this.onChangeHandler}
              />
            </FormControl>

            <FormControl className={ classes.margin }>
              <InputLabel htmlFor="adornment-password">Пароль</InputLabel>
              <Input
                id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChangeHandler}
              />
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={this.auth}
            >
              Войти
            </Button>
          </div>
        </Paper>
      </div>
    )
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
}

Auth.propTypes = {
  name: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  loginAction: PropTypes.func.isRequired
}

// приклеиваем данные из store
const mapStateToProps = ({ user }) => {
  const { name, isAuth } = user
  
  return { name, isAuth }
}

const mapDispatchToProps = dispatch => ({
  loginAction: name => dispatch(login(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles,{ withTheme: true })(Auth)))