import {
  MEASURES_LOADED_ERROR,
  MEASURES_LOADING_REQUEST,
  MEASURES_LOADED_SECCUSS,
} from '../actions/MeasuresActions'

const initialState = {
  loading: true,
  error: null,
  measuresList: [],
}

export const measuresReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEASURES_LOADING_REQUEST:
      return { ...state, loading: true, measuresList: [] }

    case MEASURES_LOADED_ERROR:
      return { ...state, loading: false, error: action.payload }

    case MEASURES_LOADED_SECCUSS:
      return { ...state, loading: false, measuresList: action.payload }

    default:
      return state
  }
}
