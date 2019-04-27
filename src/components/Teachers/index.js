import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../../plugins/axios'
import Loader from '../Loader'
import Alert from '../UI-core/Alert'
import TeacherCard from './TeacherCard'
import AddNew from '../UI-core/AddNew'

function TeachersList({ classes }) {
  const REST_URL = '/lecturers'

  const [teachers, setTeachers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const formatDataFromApi = items =>
    items.map(({ id, attributes, relationships }) => {
      const courses = relationships.courses && relationships.courses.data
      const { first_name, last_name, patronymic } = attributes

      return { id, first_name, last_name, patronymic, courses }
    })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(REST_URL)

        const teachers = result.data.data

        setTeachers(teachers.length ? formatDataFromApi(teachers) : [])
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  const haveTeachers = Boolean(teachers.length)

  const errorAlert = <Alert color="error">{ error }</Alert>

  const emptyAlert = <Alert color="warning">Список преподавателей пуст</Alert>

  const teachersList = teachers.map(teacher => (
    <TeacherCard { ...teacher } key={ teacher.id } />
  ))

  return (
    <>
      { error ? (
        errorAlert
      ) : loading ? (
        <Loader />
      ) : !haveTeachers ? (
        emptyAlert
      ) : (
        <div>
          { teachersList }
          <AddNew addLink="/teachers/edit" />
        </div>
      ) }
    </>
  )
}

export default TeachersList
