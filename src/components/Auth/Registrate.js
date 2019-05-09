// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createUser } from '../../actions/AuthActions.js'
import RegistrateForm from './RegistrateForm'
import { setRegistrateInfo } from '../../plugins/token'

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
})

class Registrate extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
  }

  signup = user => {
    this.props
      .createUser(user)
      .then(registrateInfo => {
        setRegistrateInfo(registrateInfo)

        return
      })
      .catch(error => console.error(`Ошибка: ${error}`))
  }

  render() {
    return <RegistrateForm onSubmit={ this.signup } />
  }
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(withRouter(Registrate))
