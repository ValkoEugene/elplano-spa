import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import Portlet from '../UI-core/Portlet'
import MoreMenu from '../UI-core/MoreMenu'

EventByDay.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  events: PropTypes.array.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

function EventByDay({ events, day, date, classes, history }) {
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

  const eventsView = events.map(event => {
    const { id, attributes } = event
    const { title, description } = attributes

    const MoreMenuOptions = [
      {
        title: 'Редактировать',
        onClick: () => history.push(`/timetable/event?id=${id}`),
      },
      {
        title: 'Добавить оценку',
        onClick: () => console.log('onClick by option Добавить оценку'),
      },
      {
        title: 'Добавить задание',
        onClick: () => console.log('onClick by option Добавить оценку'),
      },
    ]

    return (
      <Portlet key={ id } padding={ 10 }>
        <div className={ classes.eventLessonContainer }>
          <p className={ classes.eventLessonTitle }>{ title }</p>
          <MoreMenu options={ MoreMenuOptions } />
        </div>
      </Portlet>
    )
  })

  return haveEvents ? (
    <div className={ classes.container }>
      <div className={ classes.dayContainer }>
        <p className={ classes.dayTitle }>
          { daysTitle[day] }
          <br />
          { date }
        </p>

        <span className={ classes.dayCircle } />
        <span className={ classes.dayLine } />
      </div>

      <div className={ classes.contentContainer }>
        <div>{ eventsView }</div>
      </div>
    </div>
  ) : null
}

const styles = theme => ({
  container: {
    display: 'flex',
    width: '100%',
  },
  dayContainer: {
    width: 125,
    padding: 5,
    position: 'relative',
  },
  dayTitle: {
    ...theme.custom.primaryTitle,
    color: theme.palette.primary.main,
  },
  dayCircle: {
    position: 'absolute',
    top: 10,
    right: -7,
    height: 16,
    width: 16,
    borderRadius: '50%',
    border: '4px solid',
    borderColor: theme.palette.primary.light,
    ...theme.custom.shadow.main,
  },
  dayLine: {
    position: 'absolute',
    width: 2,
    height: 'calc(100% - 25px)',
    top: 30,
    right: 0,
    background: theme.palette.primary.light,
    ...theme.custom.shadow.main,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 5,
    boxSizing: 'content-box',
  },
  eventLessonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventLessonTitle: {
    ...theme.custom.primaryTitle,
  },
})

export default withRouter(withStyles(styles, { theme: true })(EventByDay))
