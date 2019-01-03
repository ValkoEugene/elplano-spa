import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import TeacherName from './TeacherName'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  wrapper: {
    textAlign: 'center',
  },
  title: {
    padding: 15,
    fontSize: 22,
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText 
  },
  subTitle: {
    marginTop: 15,
    marginBottom: 0,
    fontSize: 18
  },
  rating: {
    fontSize: 45,
    margin: 0,
    color: theme.palette.secondary.main 
  },
  teachersWrapper: {
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const LessonItem = ({ classes, lesson }) => {
  const { title, rating, teachers } = lesson

  const haveTeachers = teachers && teachers.length

  return (
    <Paper className={ classes.wrapper }>
      <h5 className={ classes.title }> { title } </h5>

      <h6 className={ classes.subTitle }> Средняя оценка: </h6>
      <p className={ classes.rating } > { rating || '-' } </p>

      {/* <Divider variant="middle" /> */}

      <h6 className={ classes.subTitle }> Преподаватели: </h6>

      <div className={ classes.teachersWrapper }>
        {
          !haveTeachers ? <p className={ classes.rating }>-</p> 
          : teachers.map(item => <TeacherName teacher={ item } key={ item.id } />)
        }
      </div>

      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Задания" icon={<Icon color="secondary">work</Icon>} />
        <BottomNavigationAction label="Оценки" icon={<Icon color="secondary">star_half</Icon>} />
        <BottomNavigationAction label="Вложения" icon={<Icon color="secondary">unarchive</Icon>} />
      </BottomNavigation>

    </Paper>
  )
}

LessonItem.proptypes = {
  classes: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired
}

export default withStyles(styles)(LessonItem)