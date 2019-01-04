import { TEACHERS_LOADED_ERROR, TEACHERS_LOADING_REQUEST, TEACHERS_LOADED_SECCUSS } from '../actions/TeachersActions.js'

const initialState = {
  loading: true,
  error: null,
  teachersList: []
}

export const teachersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEACHERS_LOADING_REQUEST:
      return { ...state, loading: true, teachersList: [] }

    case TEACHERS_LOADED_ERROR:
      return { ...state, loading: false, error: action.payload }

    case TEACHERS_LOADED_SECCUSS:
      return { ...state, loading: false, teachersList: action.payload }

    default:
      return state
  }
}