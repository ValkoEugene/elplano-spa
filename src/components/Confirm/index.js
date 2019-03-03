import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import Portlet from '../UI-core/Portlet'

import { confirm } from '../../actions/ConfirmActions'

class Confirm extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    confirm: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { location, confirm } = this.props

    const { confirmation_token } = queryString.parse(location.search)

    if (confirmation_token) confirm(confirmation_token)
  }

  render() {
    const { loading, error } = this.props

    return error ? (
      <Portlet>{ error.message }</Portlet>
    ) : loading ? (
      <Loader />
    ) : (
      <Portlet>Ваш аккаунт подтверждён</Portlet>
    )
  }
}

const mapStateToProps = ({ confirm: { loading, error } }) => ({
  loading,
  error,
})

const mapDispatchToProps = dispatch => ({
  confirm: token => dispatch(confirm(token)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Confirm))
