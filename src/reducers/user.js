import { LOGIN } from '../actions/AuthActions.js'

const initialState = {
  name: '',
  isAuth: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { name: action.payload, isAuth: true }

    default:
      return state
  }
}