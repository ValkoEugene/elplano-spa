import { useState, useEffect } from 'react'
import lecturersApi from '../api/LecturersApi'

const useLectureApi = id => {
  const [lecture, setLecture] = useState({
    first_name: '',
    last_name: '',
    patronymic: '',
    courses: [],
  })
  const [loadingLecture, setLoadingLecture] = useState(true)
  const [errorLecture, setErrorLecture] = useState(null)

  const fetchData = async id => {
    if (!id) {
      setLoadingLecture(false)
      return
    }

    try {
      const data = await lecturersApi.loadById(id)

      setLecture(data)
    } catch (error) {
      setErrorLecture(error)
    } finally {
      setLoadingLecture(false)
    }
  }

  useEffect(() => {
    fetchData(id)
  }, [])

  return { lecture, loadingLecture, errorLecture }
}

export default useLectureApi
