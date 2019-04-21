// Сохраняем логин/пароль при регистрации чтобы на странице подтверждения сразу залогинить
export const setRegistrateInfo = ({ login, password }) => {
  window.localStorage.setItem(
    'registrate-info',
    JSON.stringify({ login, password })
  )
}

export const getRegistrateInfo = () => {
  return JSON.parse(window.localStorage.getItem('registrate-info'))
}

export const unsetRegistrateInfo = () => {
  window.localStorage.removeItem('registrate-info')
}

// Сохраняем информацию о пользователе
export const setUser = user => {
  window.localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = () => {
  return JSON.parse(window.localStorage.getItem('user'))
}

export const unsettUser = () => {
  window.localStorage.removeItem('user')
}

// Сохраняем токены для работы с api
export const setToken = token => {
  window.localStorage.setItem('token', token)
}

export const getToken = () => {
  return window.localStorage.getItem('token')
}

export const setRefreshToken = refreshToken => {
  window.localStorage.setItem('refreshToken', refreshToken)
}

export const getRefreshToken = () => {
  return window.localStorage.getItem('refreshToken')
}

export const unsetTokens = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('refreshToken')
  unsettUser()
}
