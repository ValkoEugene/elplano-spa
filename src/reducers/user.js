import { LOGIN, LOGOUT } from '../actions/AuthActions.js'

const initialState = {
  username: '',
  email: '',
  isAuth: true,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        username: action.payload.username,
        email: action.payload.email,
        isAuth: true,
      }
    case LOGOUT:
      return { username: '', email: '', isAuth: false }

    default:
      return state
  }
}
