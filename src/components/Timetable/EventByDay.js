import React from 'react'
import PropTypes from 'prop-types'
import Portlet from '../UI-core/Portlet'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'

EventByDay.propTypes = {
  events: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

function EventByDay({ events, day, date }) {
  const daysTitle = {
    MO: 'Понедельник',
    TU: 'Вторник',
    WE: 'Среда',
    TH: 'Четверг',
    FR: 'Пятница',
    SA: 'Суббота',
    SU: 'Воскресенье',
  }

  const haveEvents = events.length > 0

  const eventsView = haveEvents ? (
    events.map(event => {
      const { id, attributes } = event
      const { title, description } = attributes

      return (
        <div key={ id }>
          <p>Название: { title }</p>
          <p>Описание: { description || '-' }</p>
          <Divider />
        </div>
      )
    })
  ) : (
    <p>Нет событий</p>
  )

  return (
    <Portlet>
      <Typography variant="h6" color="primary" paragraph>
        { daysTitle[day] } - { date }
      </Typography>

      <Divider />

      { eventsView }
    </Portlet>
  )
}

export default EventByDay
