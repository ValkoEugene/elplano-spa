import React from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import NewEventForm from './NewEventForm'
import Portlet from '../UI-core/Portlet'
import axios from '../../plugins/axios'
import { EVENTS_URL } from '../../actions/EventsActions'
import moment from 'moment-timezone'

NewEvent.propTypes = {
  history: PropTypes.object.isRequired,
}

function NewEvent({ history }) {
  const createEvent = ({ title, description, start_at, end_at, by_day }) => {
    const RRULE = `RRULE:FREQ=WEEKLY;BYDAY=${by_day.join(',')}`

    const recurrence = [RRULE]

    const data = {
      type: 'event',
      attributes: {
        title,
        description,
        start_at,
        end_at,
        recurrence,
        timezone: moment.tz.guess(),
      },
    }

    axios
      .post(EVENTS_URL, { data })
      .then(() => history.push('/timetable'))
      .catch(error =>
        console.error(`Произошла ошибка при создании event: ${error}`)
      )
  }

  return (
    <Portlet>
      <NewEventForm onSubmit={ createEvent } />
    </Portlet>
  )
}

export default withRouter(NewEvent)
