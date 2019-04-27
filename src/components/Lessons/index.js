import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../../plugins/axios'
import Loader from '../Loader'
import Alert from '../UI-core/Alert'
import LessonItem from './LessonItem'
import AddNew from '../UI-core/AddNew'

function TeachersList({ classes }) {
  const REST_URL = '/courses'

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const formatDataFromApi = items =>
    items.map(({ id, attributes, relationships }) => {
      const lecturers = relationships.lecturers && relationships.lecturers.data
      const { title } = attributes

      return { id, title, lecturers }
    })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(REST_URL)

        const courses = result.data.data

        setCourses(courses.length ? formatDataFromApi(courses) : [])
        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  const haveCourses = Boolean(courses.length)

  const errorAlert = <Alert color="error">{ error }</Alert>

  const emptyAlert = <Alert color="warning">Список предметов пуст</Alert>

  const coursesList = courses.map(course => (
    <LessonItem { ...course } key={ course.id } />
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
              { !haveCourses ? emptyAlert : coursesList }
              <AddNew addLink="/lessons/edit" />
            </>
          )
        }
      })() }
    </>
  )
}

export default TeachersList
