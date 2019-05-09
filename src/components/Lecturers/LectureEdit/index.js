import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import initQueryId from '../../../HOC/initQueryId'
import LectureEditForm from './LectureEditForm'
import Portlet from '../../UI-core/Portlet'
import Loader from '../../Loader'
import Alert from '../../UI-core/Alert'
import Typography from '@material-ui/core/Typography'
import GoBack from '../../UI-core/GoBack'
import { withSnackbar } from 'notistack'
import useLecturesShow from '../../../hooks/useLecturesShow'
import useCoursesIndex from '../../../hooks/useCoursesIndex'
import lecturersApi from '../../../api/LecturersApi'

LectureEdit.propTypes = {
  id: PropTypes.string,
  setId: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

function LectureEdit({ id, setId, history, location, enqueueSnackbar }) {
  const { lecture, loadingLecture, errorLecture } = useLecturesShow(id)

  const { courses, loadingCourses, errorCourses } = useCoursesIndex()

  /**
   * Список предметов для multiselect
   * @type {Array}
   */
  const coursesOptions = courses.map(({ id, title }) => ({
    value: id,
    view: title,
  }))

  /**
   * Флаг что преподаватель еще не создан
   */
  const isNew = !Boolean(id)

  /**
   * Сохранение данных о преподавателе
   * @param {Object} lecture - данные о преподавателе (required)
   * @param {Object} actions  - объект c методами из Formik (передаётся по умолчанию)
   */
  const save = async (lecture, actions) => {
    try {
      const response = isNew
        ? await lecturersApi.create(lecture)
        : await lecturersApi.update(lecture, id)

      // При создание нового проставляем id через HOC
      if (isNew) setId(response.id)

      enqueueSnackbar('Сохранено')
    } catch (error) {
    } finally {
      actions.setSubmitting(false)
    }
  }

  /**
   * Удалить преподавателя
   */
  const deleteLecture = async () => {
    await lecturersApi.deleteById(id)

    enqueueSnackbar('Удалено')
    history.push('/lecturers')
  }

  return (
    <div>
      { (() => {
        if (errorCourses || errorLecture) {
          return <Alert color="error">{ errorCourses || errorLecture }</Alert>
        } else if (loadingCourses || loadingLecture) {
          return <Loader />
        } else {
          return (
            <>
              <Portlet>
                <Typography variant="h6" color="primary">
                  { isNew
                    ? 'Добавить преподавателя'
                    : 'Редактирование преподавателя' }
                </Typography>

                {
                  <LectureEditForm
                    isNew={ isNew }
                    initialValues={ lecture }
                    coursesOptions={ coursesOptions }
                    onSubmit={ save }
                    onDelete={ deleteLecture }
                  />
                }
              </Portlet>

              <GoBack link="/lecturers" />
            </>
          )
        }
      })() }
    </div>
  )
}

export default withSnackbar(initQueryId(LectureEdit))
