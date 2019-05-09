import { useState, useEffect } from 'react'
import CoursesApi from '../api/CoursesApi'

function useCoursesIndex() {
  const [courses, setCourses] = useState([])
  const [loadingCourses, setLoadingCourses] = useState(true)
  const [errorCourses, setErrorCourses] = useState(null)

  const fetchData = async () => {
    try {
      const data = await CoursesApi.loadData()

      setCourses(data)
    } catch (error) {
      setErrorCourses(error)
    } finally {
      setLoadingCourses(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { courses, loadingCourses, errorCourses }
}

export default useCoursesIndex
