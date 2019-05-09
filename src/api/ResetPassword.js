import axios from '../plugins/axios'

const REST_URL = `/users/password`

const formatDataFromApi = attributes => ({
  data: {
    id: '',
    type: 'user',
    attributes,
  },
})

export const resetPassword = ({ email }) =>
  axios.post(REST_URL, formatDataFromApi({ email }))

export const createNewPassword = ({
  password,
  password_confirmation,
  reset_password_token,
}) =>
  axios.patch(
    REST_URL,
    formatDataFromApi({
      password,
      password_confirmation,
      reset_password_token,
    })
  )
