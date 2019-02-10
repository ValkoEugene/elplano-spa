// Компонент логина

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { createUser } from '../../actions/AuthActions.js'
import RegistrateForm from './RegistrateForm'

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
      .then(() => console.log('Подтверждение отправленно на указанную почту '))
      .catch(error => console.error(`Ошибка: ${error}`))
  }

  render() {
    const { classes } = this.props

    return (
      <div className={ classes.loginForm }>
        <h2 className={ classes.title }>Welcom to EL Plano</h2>

        <RegistrateForm onSubmit={ this.signup } />
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
