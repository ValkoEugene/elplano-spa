import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import axios from '../../plugins/axios'
import Loader from '../Loader'
import Alert from '../UI-core/Alert'
import LessonItem from './LessonItem'
import AddNew from '../UI-core/AddNew'
import useLecturersIndex from '../../hooks/useLecturersIndex'
import useCoursesIndex from '../../hooks/useCoursesIndex'
import ApiWrapper from '../UI-core/ApiWrapper'

function LessonsList({ classes }) {
  const { loadingLecturers, errorLecturers, lecturers } = useLecturersIndex()

  const { loadingCourses, errorCourses, courses } = useCoursesIndex()

  /**
   * Флаг загрузки данных
   * @type {Boolean}
   */
  const loading = loadingCourses || loadingLecturers

  /**
   * Ошибка при загрузке данных
   * @type {Error | Null}
   */
  const error = errorCourses || errorLecturers

  /**
   * Список преподавателей на отображение
   * @type {Array}
   */
  const lecturersList = lecturers.map(
    ({ id, last_name, first_name, patronymic }) => ({
      id,
      view: [last_name, first_name, patronymic].join(' '),
    })
  )

  /**
   * Флаг наличия предметов
   * @type {Boolean}
   */
  const haveCourses = Boolean(courses.length)

  /**
   * Список предметов
   * @type {JSX}
   */
  const coursesList = courses.map(course => (
    <div className={ classes.item }>
      <LessonItem { ...course } lecturersList={ lecturersList } key={ course.id } />
    </div>
  ))

  return (
    <ApiWrapper
      loading={ loading }
      error={ error }
      haveData={ haveCourses }
      emptyText="Список предметов пуст"
    >
      <>
        <div className={ classes.wrapper }>{ coursesList }</div>
        <AddNew addLink="/lessons/edit" />
      </>
    </ApiWrapper>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    flexGrow: 1,
  },
})

export default withStyles(styles, { theme: true })(LessonsList)
