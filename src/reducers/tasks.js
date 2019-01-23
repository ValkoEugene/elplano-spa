import {
  TASKS_LOADED_ERROR,
  TASKS_LOADED_SECCUSS,
  TASKS_LOADING_REQUEST,
} from '../actions/TasksAction'

const initialState = {
  loading: true,
  error: null,
  tasksList: [],
}

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LOADING_REQUEST:
      return { ...state, loading: true, tasksList: [] }

    case TASKS_LOADED_ERROR:
      return { ...state, loading: false, error: action.payload }

    case TASKS_LOADED_SECCUSS:
      return { ...state, loading: false, tasksList: action.payload }

    default:
      return state
  }
}
