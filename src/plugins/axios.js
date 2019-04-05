import axios from 'axios'
import {
  getToken,
  getRefreshToken,
  setRefreshToken,
  setToken,
  unsetTokens,
} from './token'

const baseURL = process.env.REACT_APP_BASE_URL

const axiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1`,
  data: {},
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
})

// Добавляем токены для JWT каждому запросу
const addJWT = config => {
  const token = getToken()

  console.log(process.env)

  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }

  return config
}

// Обновляем токен при 401 статусе
const updateToken = error => {
  const originalRequest = error.config

  // Проверяем статус и что это не повторный запрос
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true

    const data = {
      grant_type: 'refresh_token',
      refresh_token: getRefreshToken(),
    }

    axios
      .post(`${baseURL}/oauth/token`, data)
      .then(response => response.data)
      .then(data => {
        const { access_token, refresh_token } = data

        setToken(access_token)
        setRefreshToken(refresh_token)

        // Обновляем заголовки для повторного запроса
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${access_token}`
        originalRequest.headers['Authorization'] = `Bearer ${access_token}`

        return axios(originalRequest)
      })
      .catch(error => {
        // TODO редирект на страницу log-off
        unsetTokens()
        console.error(`Не получилось получить token: ${error}`)
      })
  }

  return Promise.reject(error)
}

axiosInstance.interceptors.request.use(addJWT)

axiosInstance.interceptors.response.use(response => response, updateToken)

export default axiosInstance
