import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Event from './index'

import {
  createEvent,
  loadEvent,
  updateEvent,
  deleteEvent,
  resetEvent,
} from '../../actions/EventActions'

const mapStateToProps = ({ event: { loading, error, currentEvent } }) => ({
  loading,
  error,
  currentEvent,
})

const mapDispatchToProps = dispatch => ({
  createEvent: data => dispatch(createEvent(data)),
  loadEvent: id => dispatch(loadEvent(id)),
  updateEvent: data => dispatch(updateEvent(data)),
  deleteEvent: id => dispatch(deleteEvent(id)),
  resetEvent: () => dispatch(resetEvent()),
})

class EditEventContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    currentEvent: PropTypes.object.isRequired,
    createEvent: PropTypes.func.isRequired,
    loadEvent: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    resetEvent: PropTypes.func.isRequired,
  }

  render() {
    return <Event { ...this.props } />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEventContainer)
