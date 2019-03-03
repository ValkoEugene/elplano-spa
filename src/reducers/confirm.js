import {
  CONFIRM_REQUEST,
  CONFIRM_ERROR,
  CONFIRM_SUCCESS,
} from '../actions/ConfirmActions'

const initialState = {
  loading: true,
  error: null,
}

export const confirmReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_REQUEST:
      return { ...state, loading: true }

    case CONFIRM_ERROR:
      return { ...state, loading: false, error: action.payload }

    case CONFIRM_SUCCESS:
      return { ...state, loading: false }

    default:
      return state
  }
}
