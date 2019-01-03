import { loadLessonsAPI } from '../api/index.js'

export const LESSONS_LOADING_REQUEST = 'LESSONS_LOADING_REQUEST'
export const LESSONS_LOADED_SECCUSS = 'LESSONS_LOADED_SECCUSS'
export const LESSONS_LOADED_ERROR = 'LESSONS_LOADED_ERROR'

export const loadLessons = () => {
  return dispatch => {
    dispatch({
      type: LESSONS_LOADING_REQUEST
    })

    loadLessonsAPI()
      .then(({ data }) => dispatch({
        type: LESSONS_LOADED_SECCUSS,
        payload: data
      }))
      .catch(error => dispatch({
        type: LESSONS_LOADED_ERROR,
        payload: error
      }))
  }
}
