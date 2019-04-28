import { useState, useEffect } from 'react'
import lecturersApi from '../api/LecturersApi'

const useLecturersApi = () => {
  const [lecturers, setLecturers] = useState([])
  const [loadingLecturers, setLoadingLecturers] = useState(true)
  const [errorLecturers, setErrorLecturers] = useState(null)

  const fetchData = async () => {
    try {
      const data = await lecturersApi.loadData()

      setLecturers(data)
    } catch (error) {
      setErrorLecturers(error)
    } finally {
      setLoadingLecturers(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { lecturers, loadingLecturers, errorLecturers }
}

export default useLecturersApi
