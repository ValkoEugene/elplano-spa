import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import Portlet from '../UI-core/Portlet'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../../actions/AuthActions.js'
import { getRegistrateInfo } from '../../plugins/token'

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
})

Confirm.propTypes = {
  location: PropTypes.object.isRequired,
}

function Confirm({ location, history, login }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const confirm = async confirmation_token => {
    const params = { confirmation_token }

    return axios({
      method: 'get',
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/users/confirmation`,
      params,
      data: {},
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    })
      .then(() => setLoading(false))
      .catch(error => setError(error))
  }

  useEffect(() => {
    const { confirmation_token } = queryString.parse(location.search)
    const registrationInfo = getRegistrateInfo()

    const initData = async () => {
      try {
        await confirm(confirmation_token)

        if (!registrationInfo) {
          return
        }

        await login(registrationInfo)

        history.push('/')
      } catch (error) {
        setError(error)
      }
    }

    confirmation_token
      ? initData()
      : setError(new Error('Пройдите по ссылке из письма на почте'))
  }, [])

  return error ? (
    <Portlet>{ error.message }</Portlet>
  ) : loading ? (
    <Loader />
  ) : (
    <Portlet>Ваш аккаунт подтверждён</Portlet>
  )
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(withRouter(Confirm))
