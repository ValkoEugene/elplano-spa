import {
  EVENTS_LOADING_REQUEST,
  EVENTS_LOADED_ERROR,
  EVENTS_LOADED_SECCUSS,
} from '../actions/EventsActions'

const initialState = {
  loading: true,
  error: null,
  eventsList: [],
}

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOADING_REQUEST:
      return { ...state, loading: true, eventsList: [] }

    case EVENTS_LOADED_ERROR:
      return { ...state, loading: false, error: action.payload }

    case EVENTS_LOADED_SECCUSS:
      return { ...state, loading: false, eventsList: action.payload }

    default:
      return state
  }
}
