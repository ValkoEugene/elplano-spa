// Компонент логина

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { login } from '../../actions/AuthActions.js'
import LoginForm from './LoginForm'

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
})

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
}

function Login(props) {
  const { classes, login, history } = props
  const [isSubmitting, setSubmitting] = useState(false)

  const auth = ({ login, password }) => {
    setSubmitting(true)

    props
      .login({ login, password })
      .then(() => history.push('/'))
      .catch(error => console.error(`Ошибка: ${error}`))
      .then(() => setSubmitting(false))
  }

  return (
    <div className={ classes.loginForm }>
      <LoginForm onSubmit={ auth } isSubmitting={ isSubmitting } />
    </div>
  )
}

const styles = theme => ({
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
