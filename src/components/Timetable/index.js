import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Loader from '.././Loader'
import moment from '../../plugins/moment'
import clonedeep from 'lodash.clonedeep'
import EventByDay from './EventByDay'

class Timetable extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    events: PropTypes.array.isRequired,
  }

  state = {
    today: moment(),
    startWeekDate: moment().startOf('week'),
    endWeekDate: moment().endOf('week'),
    // Шаблон событий на неделю
    weekEventsTemplate: {
      MO: [],
      TU: [],
      WE: [],
      TH: [],
      FR: [],
      SA: [],
      SU: [],
    },
    // События недели
    weekEvents: null,
    // Массив с днями недели (нужен т.к. объект не гарантирует порядок прохода по свойствам)
    daysOfWeekList: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
  }

  componentWillMount() {
    this.initWeekEvents()
  }

  initWeekEvents = () => {
    const { events } = this.props
    const { startWeekDate, endWeekDate, weekEventsTemplate } = this.state

    // При каждой инициализации сбрасываем weekEvents
    const weekEvents = clonedeep(weekEventsTemplate)

    events.forEach(event => {
      const {
        attributes: { start_at, end_at, recurrence },
      } = event

      // Проверяем актуальность событий
      if (
        moment(start_at).isAfter(endWeekDate) ||
        moment(end_at).isBefore(startWeekDate)
      ) {
        return
      }

      // Парсим дни недели события
      const daysOfWeek = recurrence
        .find(item => item.includes('RRULE'))
        .split(';')
        .find(item => item.includes('BYDAY'))
        .split('=')[1]
        .split(',')

      daysOfWeek.forEach(day => {
        weekEvents[day].push(event)
      })
    })

    this.setState({
      weekEvents,
    })
  }

  render() {
    const { loading, error, events, classes } = this.props
    const { weekEvents, daysOfWeekList } = this.state

    return (
      <div>
        { loading ? (
          <Loader />
        ) : (
          <div>
            <Fab
              component={ Link }
              color="primary"
              aria-label="Add"
              to="/timetable/new"
              className={ classes.fab }
            >
              <AddIcon />
            </Fab>

            { daysOfWeekList.map(day => (
              <EventByDay day={ day } events={ weekEvents[day] } key={ day } />
            )) }
          </div>
        ) }
      </div>
    )
  }
}

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: 15,
    right: 15,
  },
})

export default withStyles(styles)(Timetable)
