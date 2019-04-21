// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { createUser } from '../../actions/AuthActions.js'
import RegistrateForm from './RegistrateForm'
import { setRegistrateInfo } from '../../plugins/token'

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
})

class Registrate extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
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
    const { classes } = this.props

    return (
      <div className={ classes.loginForm }>
        <RegistrateForm onSubmit={ this.signup } />
      </div>
    )
  }
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
)(withRouter(withStyles(styles, { withTheme: true })(Registrate)))
