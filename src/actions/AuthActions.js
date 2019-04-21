import axios from 'axios'
import {
  setRefreshToken,
  setToken,
  setUser as setUserToLocalStorage,
  unsetTokens,
} from '../plugins/token'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_USER = 'SET_USER'

export const setUser = user => ({
  type: SET_USER,
  payload: user,
})

export const login = user => {
  const data = { ...user, grant_type: 'password' }

  return dispatch => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/oauth/token`, data)
      .then(response => response.data)
      .then(data => {
        const { access_token, refresh_token } = data

        // Доделать информацию о юзере
        const mockUserInfo = { username: user.login, login: user.login }
        setUserToLocalStorage(mockUserInfo)
        setToken(access_token)
        setRefreshToken(refresh_token)

        dispatch({
          type: LOGIN,
          payload: mockUserInfo,
        })

        return
      })
      .catch(error => Promise.reject(error))
  }
}

export const createUser = user => {
  const {
    username,
    email,
    email_confirmation,
    password,
    password_confirmation,
  } = user

  const data = {
    type: 'user',
    attributes: {
      email,
      password,
      username: username || email,
      email_confirmation: email_confirmation || email,
      password_confirmation: password_confirmation || password,
    },
  }

  return dispatch => {
    return axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/v1/users`, { data })
      .then(() => ({ login: email, password }))
      .catch(error => Promise.reject(error))
  }
}

export const logout = () => {
  unsetTokens()
  return { type: LOGOUT }
}
