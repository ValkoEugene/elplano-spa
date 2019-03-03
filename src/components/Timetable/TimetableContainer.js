import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Timetable from './index'
import Loader from '../Loader'

import { loadEvents } from '../../actions/EventsActions'

const mapStateToProps = ({ events }) => ({
  loading: events.loading,
  error: events.error,
  events: events.eventsList,
})

const mapDispatchToProps = dispatch => ({
  loadEvents: () => dispatch(loadEvents()),
})

class TimetableContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    events: PropTypes.array.isRequired,
    loadEvents: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    return (
      <div>
        { this.props.loading ? <Loader /> : <Timetable { ...this.props } /> }
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimetableContainer)
