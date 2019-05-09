import axios from '../plugins/axios'

const REST_URL = `/users/password`

const formatDataFromApi = attributes => ({
  data: {
    id: '',
    type: 'user',
    attributes,
  },
})

export const resetPassword = ({ email }) => {
  try {
    return axios.post(REST_URL, formatDataFromApi({ email }))
  } catch (error) {
    return Promise.reject(error)
  }
}

export const createNewPassword = ({
  password,
  password_confirmation,
  reset_password_token,
}) => {
  try {
    return axios.patch(
      REST_URL,
      formatDataFromApi({
        password,
        password_confirmation,
        reset_password_token,
      })
    )
  } catch (error) {
    return Promise.reject(error)
  }
}

export const updatePassword = ({ password, password_confirmation }) => {
  try {
    return axios.patch(
      REST_URL,
      formatDataFromApi({ password, password_confirmation })
    )
  } catch (error) {
    return Promise.reject(error)
  }
}
