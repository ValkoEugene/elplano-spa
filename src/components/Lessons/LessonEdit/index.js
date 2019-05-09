import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import initQueryId from '../../../HOC/initQueryId'
import LessonEditForm from './LessonEditForm'
import Portlet from '../../UI-core/Portlet'
import ApiWrapper from '../../UI-core/ApiWrapper'
import Typography from '@material-ui/core/Typography'
import GoBack from '../../UI-core/GoBack'
import { withSnackbar } from 'notistack'
import useCoursesShow from '../../../hooks/useCoursesShow'
import useLecturersIndex from '../../../hooks/useLecturersIndex'
import coursesApi from '../../../api/CoursesApi'

LessonEdit.propTypes = {
  id: PropTypes.string,
  setId: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

function LessonEdit({ id, setId, history, enqueueSnackbar }) {
  const { course, loadingCourse, errorCourse } = useCoursesShow(id)
  const { lecturers, loadingLecturers, errorLecturers } = useLecturersIndex()

  /**
   * Флаг загрузки данных
   * @type {Boolean}
   */
  const loading = loadingLecturers || loadingCourse

  /**
   * Ошибка при загрузке данных
   * @type {Error | Null}
   */
  const error = errorLecturers || errorCourse

  /**
   * Список преподавателей для multiselect
   * @type {Array}
   */
  const lecturersOptions = lecturers.map(
    ({ id, last_name, first_name, patronymic }) => ({
      value: id,
      view: [last_name, first_name, patronymic].join(' '),
    })
  )

  /**
   * Флаг что предмет еще не создан
   * @type {Boolean}
   */
  const isNew = !Boolean(id)

  /**
   * Сохранение предмета
   * @param {Object} lesson - данные о предмете (required)
   * @param {Object} actions  - объект c методами из Formik (передаётся по умолчанию)
   */
  const save = async (lesson, actions) => {
    try {
      const response = id
        ? await coursesApi.update(lesson, id)
        : await coursesApi.create(lesson)

      // При создание нового проставляем id через HOC
      if (isNew) setId(response.id)

      enqueueSnackbar('Сохранено')
    } catch (error) {
      enqueueSnackbar(error.message)
    } finally {
      actions.setSubmitting(false)
    }
  }

  /**
   * Удалить предмет
   */
  const deleteLesson = async () => {
    try {
      await coursesApi.deleteById(id)

      enqueueSnackbar('Удалено')
      history.push('/lessons')
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    }
  }

  return (
    <ApiWrapper loading={ loading } error={ error }>
      <>
        <Portlet>
          <Typography variant="h6" color="primary">
            { isNew ? 'Создание предмета' : 'Редактирование предмета' }
          </Typography>

          <LessonEditForm
            isNew={ isNew }
            initialValues={ course }
            lecturersList={ lecturersOptions }
            onSubmit={ save }
            onDelete={ deleteLesson }
          />
        </Portlet>

        <GoBack link="/lessons" />
      </>
    </ApiWrapper>
  )
}

export default withSnackbar(initQueryId(LessonEdit))
