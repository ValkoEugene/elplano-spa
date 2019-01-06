import { loadTasksAPI } from '../api/index.js'

export const TASKS_LOADING_REQUEST = 'TASKS_LOADING_REQUEST'
export const TASKS_LOADED_SECCUSS = 'TASKS_LOADED_SECCUSS'
export const TASKS_LOADED_ERROR = 'TASKS_LOADED_ERROR'

export const loadTasks = () => {
  return dispatch => {
    dispatch({
      type: TASKS_LOADING_REQUEST,
    })

    loadTasksAPI()
      .then(({ data }) =>
        dispatch({
          type: TASKS_LOADED_SECCUSS,
          payload: data,
        })
      )
      .catch(error =>
        dispatch({
          type: TASKS_LOADED_ERROR,
          payload: error,
        })
      )
  }
}
