import axios from '../plugins/axios'

export const EVENTS_LOADING_REQUEST = 'EVENTS_LOADING_REQUEST'
export const EVENTS_LOADED_SECCUSS = 'EVENTS_LOADED_SECCUSS'
export const EVENTS_LOADED_ERROR = 'EVENTS_LOADED_ERROR'

export const EVENTS_URL = '/events'

export const loadEvents = () => {
  return dispatch => {
    dispatch({
      type: EVENTS_LOADING_REQUEST,
    })

    return axios
      .get(EVENTS_URL)
      .then(response => response.data)
      .then(({ data }) =>
        dispatch({
          type: EVENTS_LOADED_SECCUSS,
          payload: data,
        })
      )
      .catch(error => dispatch({ type: EVENTS_LOADED_ERROR, payload: error }))
  }
}
