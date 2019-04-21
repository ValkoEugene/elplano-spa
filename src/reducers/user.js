import { LOGIN, LOGOUT, SET_USER } from '../actions/AuthActions.js'
import { getUser } from '../plugins/token'

const initialState = {
  username: '',
  email: '',
  isAuth: Boolean(getUser()),
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case SET_USER:
      return {
        username: action.payload.username,
        email: action.payload.email,
        isAuth: true,
      }
    case LOGOUT:
      console.log('LOGOUT')
      return { username: '', email: '', isAuth: false }

    default:
      return state
  }
}
