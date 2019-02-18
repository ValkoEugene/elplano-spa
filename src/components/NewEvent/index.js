import React from 'react'
import NewEventForm from './NewEventForm'
import Portlet from '../UI-core/Portlet'
import axios from '../../plugins/axios'
import { EVENTS_URL } from '../../actions/EventsActions'

const NewEvent = ({ classes }) => {
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
        timezone: 'Etc/GMT+12',
      },
    }

    axios
      .post(EVENTS_URL, { data })
      .then(response => console.log(response))
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

export default NewEvent
