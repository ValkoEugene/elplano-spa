import { LOGIN, LOGOUT } from '../actions/AuthActions.js'

const initialState = {
  name: '123',
  isAuth: true
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { name: action.payload, isAuth: true }
    case LOGOUT:
      return { name: '', isAuth: false }

    default:
      return state
  }
}