import axios from 'axios'
import { setRefreshToken, setToken } from '../plugins/token'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const login = user => {
  const data = { ...user, grant_type: 'password' }

  return dispatch => {
    return axios
      .post('https://elplano-api.herokuapp.com/oauth/token', data)
      .then(response => response.data)
      .then(data => {
        const { access_token, refresh_token } = data

        setToken(access_token)
        setRefreshToken(refresh_token)

        dispatch({
          type: LOGIN,
          payload: user,
        })

        return
      })
      .catch(error => console.error(`Ошибка при логине: ${error}`))
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
      .post('https://elplano-api.herokuapp.com/api/v1/users', { data })
      .then(response => console.log(response))
      .catch(error => console.error(`Ну чет грохнулось: ${error}`))
  }
}

export const logout = () => ({ type: LOGOUT })
