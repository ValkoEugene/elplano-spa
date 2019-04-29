import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import axios from '../../../plugins/axios'
import LessonEditForm from './LessonEditForm'
import Portlet from '../../UI-core/Portlet'
import Loader from '../../Loader'
import Alert from '../../UI-core/Alert'
import Typography from '@material-ui/core/Typography'
import GoBack from '../../UI-core/GoBack'
import { withSnackbar } from 'notistack'

LessonEdit.propTypes = {
  enqueueSnackbar: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

function LessonEdit({ history, location, enqueueSnackbar }) {
  const REST_URL = '/courses'

  const [lessonId, setLessonId] = useState('')
  const [lesson, setLesson] = useState({ title: '', lecturers: [] })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [lecturersList, setLecturersList] = useState([])

  /**
   * Флаг что предмет еще не создан
   */
  const isNew = !Boolean(lessonId)

  /**
   * Формотирование данных для api
   * @param {Object} data - данные для сохранения (required)
   */
  const formatDataForApi = ({ title, lecturers = [] }) => ({
    type: 'course',
    attributes: {
      title,
    },
    relationships: {
      lecturers: {
        data: lecturers.map(id => ({ type: 'lecturer', id })),
      },
    },
  })

  /**
   * Сохранение предмета
   * @param {Object} lesson - данные о предмете (required)
   * @param {Object} actions  - объект c методами из Formik (передаётся по умолчанию)
   */
  const save = async (lesson, actions) => {
    const data = formatDataForApi(lesson)

    try {
      lessonId ? await update(data) : await create(data)

      enqueueSnackbar('Сохранено')
    } catch (error) {
      setError(error)
    } finally {
      actions.setSubmitting(false)
    }
  }

  /**
   * Создание предмета
   * @param {Object} data - данные о предмете (required)
   */
  const create = async data => {
    const response = await axios.post(REST_URL, { data })

    setLessonId(response.data.data.id)
  }

  /**
   * Создание предмета
   * @param {Object} data - данные о предмете (required)
   */
  const update = async data => {
    await axios.put(`${REST_URL}/${lessonId}`, { data })
  }

  /**
   * Удалить предмет
   * @param {String} id - id предмета
   */
  const deleteLesson = async id => {
    await axios.delete(`${REST_URL}/${lessonId}`)

    enqueueSnackbar('Удалено')
    history.push('/lessons')
  }

  /**
   * Загрузить список преподавателей
   */
  const loadLecturers = async () => {
    const response = await axios.get('/lecturers')

    const lecturers = response.data.data.map(
      ({ id, attributes: { first_name, last_name, patronymic } }) => ({
        value: id,
        view: [last_name, first_name, patronymic].join(' '),
      })
    )

    setLecturersList(lecturers)
  }

  /**
   * Загрузить предмет
   * @param {String} id - id предмета
   */
  const loadLesson = async id => {
    if (!id) {
      return
    }

    const response = await axios(`${REST_URL}/${id}`)

    const lesson = response.data.data
    const { title } = lesson.attributes
    const lecturers = lesson.relationships.lecturers.data.map(({ id }) => id)

    setLessonId(id)
    setLesson({ title, lecturers })
  }

  /**
   * Инициализация данных
   */
  useEffect(() => {
    const { id } = queryString.parse(location.search)

    const fetchData = async id => {
      try {
        await Promise.all([loadLecturers(), loadLesson(id)])

        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData(id)
  }, [])

  return (
    <div>
      { (() => {
        if (error) {
          return <Alert color="error">{ error }</Alert>
        } else if (loading) {
          return <Loader />
        } else {
          return (
            <>
              <Portlet>
                <Typography variant="h6" color="primary">
                  { isNew ? 'Создание предмета' : 'Редактирование предмета' }
                </Typography>

                <LessonEditForm
                  isNew={ isNew }
                  initialValues={ lesson }
                  lecturersList={ lecturersList }
                  onSubmit={ save }
                  onDelete={ deleteLesson }
                />
              </Portlet>

              <GoBack link="/lessons" />
            </>
          )
        }
      })() }
    </div>
  )
}

export default withSnackbar(withRouter(LessonEdit))
