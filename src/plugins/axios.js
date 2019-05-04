import axios from 'axios'
import {
  getToken,
  getRefreshToken,
  setRefreshToken,
  setToken,
  unsetTokens,
} from './token'
import { store } from '../store/configureStore'
import { logout } from '../actions/AuthActions'

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

    return axios
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
        store.dispatch(logout())
        console.error(`Не получилось получить token: ${error}`)
      })
  }
}

// Обработка ошибок
const handlingErrors = error => {
  // Обрабатываем ошибки сети
  // в них нет ответа и соответственно status, data что нужны
  if (!error.response) {
    console.error('Network error')
    return
  }

  // Получаем статус ошибки и данные
  const { status, data } = error.response

  if (status === 401) {
    return // Отдельно обрабатываем в updateToken
  } else if (status === 404) {
    error.message = 'Запись не найдена'
  } else if (status >= 400 && status < 500 && data.errors) {
    error.message = data.errors.map(({ detail }) => detail).join(', ')
  } else if (status >= 500) {
    error.message = 'Извините, возникла ошибка на сервере'
  }

  return Promise.reject(error.message)
}

axiosInstance.interceptors.request.use(addJWT)
axiosInstance.interceptors.response.use(response => response, updateToken)
axiosInstance.interceptors.response.use(response => response, handlingErrors)

export default axiosInstance
