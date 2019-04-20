import React, { Component } from 'react'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import EventForm from './EventForm'
import Portlet from '../UI-core/Portlet'
import GoBack from '../UI-core/GoBack'
import Loader from '../Loader'
import moment from 'moment-timezone'

class EditEvent extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    currentEvent: PropTypes.object.isRequired,
    createEvent: PropTypes.func.isRequired,
    loadEvent: PropTypes.func.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    updateEvent: PropTypes.func.isRequired,
    resetEvent: PropTypes.func.isRequired,
  }

  state = {
    eventId: '',
  }

  componentDidMount() {
    const { location, loadEvent } = this.props

    const { id } = queryString.parse(location.search)

    if (id) {
      this.setState({ eventId: id })

      loadEvent(id)
    }
  }

  componentWillUnmount() {
    this.props.resetEvent()
  }

  formatData = ({ id, title, description, start_at, end_at, by_day }) => {
    const RRULE = `RRULE:FREQ=WEEKLY;BYDAY=${by_day.join(',')}`

    const recurrence = [RRULE]

    return {
      type: 'event',
      attributes: {
        id,
        title,
        description,
        start_at,
        end_at,
        recurrence,
        timezone: moment.tz.guess(),
      },
    }
  }

  update = data => {
    const { eventId } = this.state
    const { createEvent, updateEvent } = this.props

    const formatedData = this.formatData(data)

    eventId ? updateEvent(formatedData) : createEvent(formatedData)

    // TODO : history.push
  }

  initDeleteEvent = () => {
    this.props
      .deleteEvent(this.state.eventId)
      .then(() => this.props.history.push('/timetable'))
      .catch(error => console.error(`error catch: ${error}`))
  }

  render() {
    const { loading } = this.props

    return loading ? (
      <Loader />
    ) : (
      <Portlet>
        <EventForm
          onSubmit={ this.update }
          initDeleteEvent={ this.initDeleteEvent }
        />

        <GoBack link="/timetable" />
      </Portlet>
    )
  }
}

export default withRouter(EditEvent)
