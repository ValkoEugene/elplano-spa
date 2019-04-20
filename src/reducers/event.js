import {
  EVENT_LOADING_REQUEST,
  EVENT_ERROR,
  EVENT_LOADED_SECCUSS,
  SET_CURRENT_EVENT,
  EVENT_DELETED,
  RESET_CURRENT_EVENT,
} from '../actions/EventActions'

const initialState = {
  loading: false,
  error: null,
  currentEvent: {
    id: '',
    title: '',
    description: '',
    start_at: null,
    end_at: null,
    by_day: '',
  },
}

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENT_LOADING_REQUEST:
      return { ...state, loading: true }

    case EVENT_ERROR:
      return { ...state, loading: false, error: action.payload }

    case EVENT_LOADED_SECCUSS:
      return { ...state, loading: false }

    case RESET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: {
          id: '',
          title: '',
          description: '',
          start_at: null,
          end_at: null,
          by_day: '',
        },
      }

    case SET_CURRENT_EVENT:
      return { ...state, loading: false, currentEvent: action.payload }

    case EVENT_DELETED:
      return { ...initialState }

    default:
      return state
  }
}
