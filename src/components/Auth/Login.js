// Компонент логина

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { login } from '../../actions/AuthActions.js'
import LoginForm from './LoginForm'

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
})

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

function Login(props) {
  const { login, history } = props
  const [isSubmitting, setSubmitting] = useState(false)

  const auth = ({ login, password }) => {
    setSubmitting(true)

    props
      .login({ login, password })
      .then(() => history.push('/'))
      .catch(error => console.error(`Ошибка: ${error}`))
      .then(() => setSubmitting(false))
  }

  return <LoginForm onSubmit={ auth } isSubmitting={ isSubmitting } />
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(withRouter(Login))
