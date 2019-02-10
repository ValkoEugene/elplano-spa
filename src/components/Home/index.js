import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import HomeWidget from './HomeWidget.js'
import { theme } from '../../App.js'
import ThemeColors from '../ThemeColors'

import axios from '../../plugins/axios'

const mapStateToProps = ({ mainInfo }) => ({
  ...mainInfo,
})

class Home extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    todayTaskCount: PropTypes.number.isRequired,
    todayMeasuresCount: PropTypes.number.isRequired,
    tomorroyTaskCount: PropTypes.number.isRequired,
    tomorroyMeasuresCount: PropTypes.number.isRequired,
    todayTimetable: PropTypes.array.isRequired,
    todayTasks: PropTypes.array.isRequired,
  }

  // componentDidMount() {
  //   axios
  //     .get('/me')
  //     .then(response => console.log(response))
  //     .catch(error => console.log('Ошибка при загрузке', error))
  // }

  render() {
    const {
      classes,
      todayTaskCount,
      todayMeasuresCount,
      tomorroyTaskCount,
      tomorroyMeasuresCount,
    } = this.props

    const wrapperStyle1 = {
      color: 'white',
      background: theme.palette.primary.light,
    }

    const wrapperStyle2 = {
      color: 'white',
      background: theme.palette.primary.main,
    }

    return (
      <Grid container spacing={ 24 }>
        <Grid item xs={ 6 }>
          <Paper className={ classes.paper }>Расписание на сегодня</Paper>
        </Grid>

        <Grid item xs={ 6 }>
          <Grid container spacing={ 16 }>
            <Grid item xs={ 6 }>
              <HomeWidget
                text={ 'Заданий на сегодня' }
                count={ todayTaskCount }
                icon={ 'work' }
                wrapperStyle={ wrapperStyle1 }
              />
            </Grid>

            <Grid item xs={ 6 }>
              <HomeWidget
                text={ 'Мероприятий на сегодня' }
                count={ todayMeasuresCount }
                icon={ 'event_note' }
                wrapperStyle={ wrapperStyle2 }
              />
            </Grid>

            <Grid item xs={ 6 }>
              <HomeWidget
                text={ 'Заданий на завтра' }
                count={ tomorroyTaskCount }
                icon={ 'work' }
                wrapperStyle={ wrapperStyle1 }
              />
            </Grid>

            <Grid item xs={ 6 }>
              <HomeWidget
                text={ 'Мероприятий на завтра' }
                count={ tomorroyMeasuresCount }
                icon={ 'event_note' }
                wrapperStyle={ wrapperStyle2 }
              />
            </Grid>
          </Grid>
        </Grid>

        <ThemeColors />
      </Grid>
    )
  }
}

const styles = theme => ({
  paper: {
    padding: 25,
    ...theme.custom.shadow,
  },
})

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Home)
)
