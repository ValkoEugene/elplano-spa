import {
  TEACHER_LOADING_REQUEST,
  TEACHER_ERROR,
  TEACHER_LOADED_SECCUSS,
  SET_CURRENT_TEACHER,
  TEACHER_DELETED,
} from '../actions/TeacherActions'

const initialState = {
  loading: false,
  error: null,
  currentTeacher: {
    id: '',
    first_name: '',
    last_name: '',
    patronymic: '',
  },
}

export const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEACHER_LOADING_REQUEST:
      return { ...state, loading: true }

    case TEACHER_ERROR:
      return { ...state, loading: false, error: action.payload }

    case TEACHER_LOADED_SECCUSS:
      return { ...state, loading: false }

    case SET_CURRENT_TEACHER:
      return { ...state, loading: false, currentTeacher: action.payload }

    case TEACHER_DELETED:
      return { ...initialState }

    default:
      return state
  }
}
