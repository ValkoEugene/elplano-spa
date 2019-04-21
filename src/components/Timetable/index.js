import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons/'
import Typography from '@material-ui/core/Typography'
import Alert from '../UI-core/Alert'
import Loader from '../Loader'
import moment from '../../plugins/moment'
import clonedeep from 'lodash.clonedeep'
import EventByDay from './EventByDay'
import AddNew from '../UI-core/AddNew'

const parseDaysOfWeek = recurrence =>
  recurrence
    .find(item => item.includes('RRULE'))
    .split(';')
    .find(item => item.includes('BYDAY'))
    .split('=')[1]
    .split(',')

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
    initing: true,
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
    weekEvents: {},
    // Массив с днями недели (нужен т.к. объект не гарантирует порядок прохода по свойствам)
    daysOfWeekList: ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'],
    // Массив с датами на неделю
    weekDates: [],
  }

  componentDidMount() {
    const { startWeekDate, endWeekDate } = this.state
    this.initWeekData({ startWeekDate, endWeekDate })
  }

  // Получаем список дат для недели
  getWeekDates = ({ startWeekDate }) => {
    let weekDates = [startWeekDate]

    for (let i = 1; i < 7; i++) {
      weekDates.push(weekDates[weekDates.length - 1].clone().add(1, 'days'))
    }

    weekDates = weekDates.map(date => date.format('DD.MM.YYYY'))

    return weekDates
  }

  // Инициализация данных по недели
  initWeekData = ({ startWeekDate, endWeekDate }) => {
    const { events } = this.props
    const { weekEventsTemplate } = this.state

    // При каждой инициализации сбрасываем weekEvents
    const weekEvents = clonedeep(weekEventsTemplate)

    // Пробегаем по событиям и ищем актуальные
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
      const daysOfWeek = parseDaysOfWeek(recurrence)

      daysOfWeek.forEach(day => {
        weekEvents[day].push(event)
      })
    })

    const weekDates = this.getWeekDates({ startWeekDate })

    this.setState({
      startWeekDate,
      endWeekDate,
      weekEvents,
      weekDates,
      initing: false,
    })
  }

  prevWeek = () => {
    this.setNewWeek(this.state.startWeekDate.clone().subtract(7, 'days'))
  }

  nextWeek = () => {
    this.setNewWeek(this.state.startWeekDate.clone().add(7, 'days'))
  }

  setNewWeek = startWeekDate => {
    const endWeekDate = startWeekDate.clone().endOf('week')

    this.initWeekData({ startWeekDate, endWeekDate })
  }

  render() {
    const { loading, classes } = this.props
    const { weekEvents, daysOfWeekList, weekDates, initing } = this.state

    let haveEvents = false

    Object.keys(weekEvents).forEach(day => {
      if (weekEvents[day].length) haveEvents = true
    })

    const emptyAlert = <Alert color="warning">Нет пар</Alert>

    return (
      <div>
        { loading || initing ? (
          <Loader />
        ) : (
          <div>
            <AddNew addLink="/timetable/event" />

            <div className={ classes.datesButtonWrapper }>
              <IconButton onClick={ this.prevWeek }>
                <KeyboardArrowLeft />
              </IconButton>

              <Typography variant="h5" color="primary" align="center">
                { weekDates[0] } - { weekDates[weekDates.length - 1] }
              </Typography>

              <IconButton onClick={ this.nextWeek }>
                <KeyboardArrowRight />
              </IconButton>
            </div>

            { haveEvents
              ? daysOfWeekList.map((day, index) => (
                  <EventByDay
                    day={ day }
                    events={ weekEvents[day] }
                    date={ weekDates[index] }
                    key={ day }
                  />
                ))
              : emptyAlert }
          </div>
        ) }
      </div>
    )
  }
}

const styles = theme => ({
  datesButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default withStyles(styles)(Timetable)
export { parseDaysOfWeek }
