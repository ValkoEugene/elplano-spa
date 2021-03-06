import axios from '../plugins/axios'
import { parseDaysOfWeek } from '../components/Timetable'

export const EVENT_LOADING_REQUEST = 'EVENT_LOADING_REQUEST'
export const EVENT_LOADED_SECCUSS = 'EVENT_LOADED_SECCUSS'
export const EVENT_ERROR = 'EVENT_ERROR'

export const RESET_CURRENT_EVENT = 'RESET_CURRENT_EVENT'

export const SET_CURRENT_EVENT = 'SET_CURRENT_EVENT'
export const EVENT_CREATED_ERROR = 'EVENT_CREATED_ERROR'

export const EVENT_DELETED = 'EVENT_DELETED'

export const EVENTS_URL = '/events'

const formatResponse = data => {
  const {
    id,
    attributes: { title, description, start_at, end_at, recurrence },
  } = data

  return {
    id,
    title,
    description,
    start_at,
    end_at,
    by_day: parseDaysOfWeek(recurrence),
  }
}

export const createEvent = data => {
  return dispatch => {
    return axios
      .post(EVENTS_URL, { data })
      .then(response => response.data)
      .then(({ data }) =>
        dispatch({
          type: SET_CURRENT_EVENT,
          payload: formatResponse(data),
        })
      )
      .catch(error => dispatch({ type: EVENT_ERROR, payload: error }))
  }
}

export const loadEvent = id => {
  return dispatch => {
    dispatch({
      type: EVENT_LOADING_REQUEST,
    })

    return axios
      .get(`${EVENTS_URL}/${id}`)
      .then(response => response.data)
      .then(({ data }) => {
        dispatch({ type: EVENT_LOADED_SECCUSS })

        return dispatch({
          type: SET_CURRENT_EVENT,
          payload: formatResponse(data),
        })
      })
      .catch(error => dispatch({ type: EVENT_ERROR, payload: error }))
  }
}

export const updateEvent = data => {
  return dispatch => {
    return axios
      .put(`${EVENTS_URL}/${data.attributes.id}`, { data })
      .then(response => response.data)
      .then(({ data }) =>
        dispatch({
          type: SET_CURRENT_EVENT,
          payload: formatResponse(data),
        })
      )
      .catch(error => dispatch({ type: EVENT_ERROR, payload: error }))
  }
}

export const deleteEvent = id => {
  return dispatch => {
    return axios
      .delete(`${EVENTS_URL}/${id}`)
      .then(() => dispatch({ type: EVENT_DELETED, payload: id }))
      .catch(error => dispatch({ type: EVENT_ERROR, payload: error }))
  }
}

export const resetEvent = () => ({ type: RESET_CURRENT_EVENT })
