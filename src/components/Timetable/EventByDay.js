import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Portlet from '../UI-core/Portlet'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

EventByDay.propTypes = {
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

function EventByDay({ events, day, date, classes }) {
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
          <div className={ classes.eventInfoWrapper }>
            <div className={ classes.eventInfoDescription }>
              <p>Название: { title }</p>
              <p>Описание: { description || '-' }</p>
            </div>
            <Fab
              component={ Link }
              color="primary"
              size="small"
              to={ `/timetable/event?id=${id}` }
            >
              <EditIcon />
            </Fab>
          </div>
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

const styles = theme => ({
  eventInfoWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  eventInfoDescription: {
    width: 'fit-content',
  },
})

export default withStyles(styles)(EventByDay)
