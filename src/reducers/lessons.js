import { LESSONS_LOADED_ERROR, LESSONS_LOADED_SECCUSS, LESSONS_LOADING_REQUEST } from '../actions/LessonsActions.js'

const initialState = {
  loading: true,
  error: null,
  lessonsList: []
}

export const lessonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LESSONS_LOADING_REQUEST:
      return { ...state, loading: true, lessonsList: [] }

    case LESSONS_LOADED_ERROR:
      return { ...state, loading: false, error: action.payload }

    case LESSONS_LOADED_SECCUSS:
      return { ...state, loading: false, lessonsList: action.payload }

    default:
      return state
  }
}