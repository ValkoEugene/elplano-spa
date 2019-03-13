import axios from '../plugins/axios'

export const TEACHERS_LOADING_REQUEST = 'TEACHERS_LOADING_REQUEST'
export const TEACHERS_LOADED_SECCUSS = 'TEACHERS_LOADED_SECCUSS'
export const TEACHERS_LOADED_ERROR = 'TEACHERS_LOADED_ERROR'

export const TEACHERS_URL = '/lecturers'

export const loadTeachers = () => {
  return dispatch => {
    dispatch({
      type: TEACHERS_LOADING_REQUEST,
    })

    return axios
      .get(TEACHERS_URL)
      .then(response => response.data)
      .then(({ data }) =>
        dispatch({
          type: TEACHERS_LOADED_SECCUSS,
          payload: data,
        })
      )
      .catch(error =>
        dispatch({
          type: TEACHERS_LOADED_ERROR,
          payload: error,
        })
      )
  }
}
