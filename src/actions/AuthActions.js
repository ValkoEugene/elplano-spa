import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

// /oauth/token

// {
//   "grant_type": "password",
//   "login": "username or email",
//   "password": "password"
// }

export const login = user => {
  const data = { ...user, grant_type: 'password' }

  return dispatch => {
    return axios
      .post('https://elplano-api.herokuapp.com/oauth/token', data)
      .then(response => console.log(response))
      .then(data =>
        dispatch({
          type: LOGIN,
          payload: user,
        })
      )
      .catch(error => console.error(`Ошибка при логине: ${error}`))
  }
}

// POST : /api/v1/user

// {
//   "data": {
//       "type": "user",
//       "attributes": {
//         "username": "wat esername",
//         "email": "so@wat.email",
//         "email_confirmation": "so@wat.email",
//         "password":"123456",
//         "password_confirmation":"123456"
//       }
//   }
// }

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
    return (
      axios
        .post('https://elplano-api.herokuapp.com/api/v1/users', { data })
        // return Promise.resolve({ data })
        .then(response => console.log(response))
        .catch(error => console.error(`Ну чет грохнулось: ${error}`))
    )
  }
}

export const logout = () => ({ type: LOGOUT })
