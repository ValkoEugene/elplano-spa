import axios from '../plugins/axios'

export const TEACHER_LOADING_REQUEST = 'TEACHER_LOADING_REQUEST'
export const TEACHER_LOADED_SECCUSS = 'TEACHER_LOADED_SECCUSS'
export const TEACHER_ERROR = 'TEACHER_ERROR'

export const SET_CURRENT_TEACHER = 'SET_CURRENT_TEACHER'
export const TEACHER_CREATED_ERROR = 'TEACHER_CREATED_ERROR'

export const TEACHER_DELETED = 'TEACHER_DELETED'

export const TEACHERS_URL = '/lecturers'

const formatResponse = data => {
  const {
    id,
    attributes: { first_name, last_name, patronymic },
  } = data

  return {
    id,
    first_name,
    last_name,
    patronymic,
  }
}

export const createTeacher = data => {
  return dispatch => {
    return axios
      .post(TEACHERS_URL, { data })
      .then(response => response.data)
      .then(({ data }) =>
        dispatch({
          type: SET_CURRENT_TEACHER,
          payload: formatResponse(data),
        })
      )
      .catch(error => dispatch({ type: TEACHER_ERROR, payload: error }))
  }
}

export const loadTeacher = id => {
  return dispatch => {
    dispatch({
      type: TEACHER_LOADING_REQUEST,
    })

    return axios
      .get(`${TEACHERS_URL}/${id}`)
      .then(response => response.data)
      .then(({ data }) => {
        dispatch({ type: TEACHER_LOADED_SECCUSS })

        return dispatch({
          type: SET_CURRENT_TEACHER,
          payload: formatResponse(data),
        })
      })
      .catch(error => dispatch({ type: TEACHER_ERROR, payload: error }))
  }
}

export const updateTeacher = data => {
  return dispatch => {
    return axios
      .put(`${TEACHERS_URL}/${data.attributes.id}`, { data })
      .then(response => response.data)
      .then(({ data }) =>
        dispatch({
          type: SET_CURRENT_TEACHER,
          payload: formatResponse(data),
        })
      )
      .catch(error => dispatch({ type: TEACHER_ERROR, payload: error }))
  }
}

export const deleteTeacher = id => {
  return dispatch => {
    return axios
      .delete(`${TEACHERS_URL}/${id}`)
      .then(() => dispatch({ type: TEACHER_DELETED, payload: id }))
      .catch(error => dispatch({ type: TEACHER_ERROR, payload: error }))
  }
}
