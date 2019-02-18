import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loader from '.././Loader'
import moment from '../../plugins/moment'
import clonedeep from 'lodash.clonedeep'

// Шаблон событий на неделю
const weekEventsTemplate = {
  MO: [],
  TU: [],
  WE: [],
  TH: [],
  FR: [],
  SA: [],
  SU: [],
}

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
    weekEvents: null,
  }

  componentWillMount() {
    this.initWeekEvents()
  }

  initWeekEvents = () => {
    const { events } = this.props
    const { startWeekDate, endWeekDate } = this.state

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
    const { loading, error, events } = this.props

    return (
      <div>
        { loading ? (
          <Loader />
        ) : (
          <div>
            <Link to="/timetable/new">Add event</Link>

            <div />
          </div>
        ) }
      </div>
    )
  }
}

export default Timetable
