import { useState, useEffect } from 'react'
import coursesApi from '../api/CoursesApi'

const useCourseApi = id => {
  const [course, setCourse] = useState({})
  const [loadingCourse, setLoadingCourse] = useState(true)
  const [errorCourse, setErrorCourse] = useState(null)

  const fetchData = async id => {
    if (!id) {
      setLoadingCourse(false)
      return
    }

    try {
      const data = await coursesApi.loadById(id)

      setCourse(data)
    } catch (error) {
      setErrorCourse(error)
    } finally {
      setLoadingCourse(false)
    }
  }

  useEffect(() => {
    fetchData(id)
  }, [])

  return { course, loadingCourse, errorCourse }
}

export default useCourseApi
