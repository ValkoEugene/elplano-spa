import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import axios from '../../plugins/axios'
import Loader from '../Loader'
import Alert from '../UI-core/Alert'
import LessonItem from './LessonItem'
import AddNew from '../UI-core/AddNew'

function LessonsList({ classes }) {
  const REST_URL = '/courses'

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [lecturersList, setLecturersList] = useState([])

  /**
   * Формотирование данных от api
   * @param {Array} items - список предметов
   * @returns {Array} форматированный список предметов
   */
  const formatDataFromApi = items =>
    items.map(({ id, attributes, relationships }) => {
      const lecturers = relationships.lecturers && relationships.lecturers.data
      const { title } = attributes

      return { id, title, lecturers }
    })

  /**
   * Загрузить список предметов
   */
  const loadLessons = async () => {
    const result = await axios(REST_URL)

    const courses = result.data.data

    setCourses(courses.length ? formatDataFromApi(courses) : [])
  }

  /**
   * Загрузить список преподавателей
   */
  const loadLecturers = async () => {
    const response = await axios.get('/lecturers')

    const lecturers = response.data.data.map(
      ({ id, attributes: { first_name, last_name, patronymic } }) => ({
        id,
        view: [last_name, first_name, patronymic].join(' '),
      })
    )

    setLecturersList(lecturers)
  }

  /**
   * Инициализация данных
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([loadLecturers(), loadLessons()])

        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  /**
   * Флаг наличия предметов
   * @type {Boolean}
   */
  const haveCourses = Boolean(courses.length)

  /**
   * Сообщение о ошибки
   * @type {JSX}
   */
  const errorAlert = <Alert color="error">{ error }</Alert>

  /**
   * Сообщение об отсутствие предметов
   * @type {JSX}
   */
  const emptyAlert = <Alert color="warning">Список предметов пуст</Alert>

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
    <>
      { (() => {
        if (error) {
          return errorAlert
        } else if (loading) {
          return <Loader />
        } else {
          return (
            <>
              { !haveCourses ? (
                emptyAlert
              ) : (
                <div className={ classes.wrapper }>{ coursesList }</div>
              ) }
              <AddNew addLink="/lessons/edit" />
            </>
          )
        }
      })() }
    </>
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
