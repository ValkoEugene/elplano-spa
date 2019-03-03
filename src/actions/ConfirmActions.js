import axios from 'axios'
import { setRefreshToken, setToken } from '../plugins/token'

export const CONFIRM_REQUEST = 'CONFIRM_REQUEST'
export const CONFIRM_SUCCESS = 'CONFIRM_SUCCESS'
export const CONFIRM_ERROR = 'CONFIRM_ERROR'

export const confirm = confirmation_token => {
  const params = { confirmation_token }

  return dispatch => {
    dispatch({ type: CONFIRM_REQUEST })

    return axios({
      method: 'get',
      url: 'https://elplano-api.herokuapp.com/api/v1/users/confirmation',
      params,
      data: {},
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    })
      .then(() => dispatch({ type: CONFIRM_SUCCESS }))
      .catch(error => dispatch({ type: CONFIRM_ERROR, payload: error }))
  }
}
