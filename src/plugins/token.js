export const setToken = token => window.localStorage.setItem('token', token)

export const getToken = () => window.localStorage.getItem('token')

export const setRefreshToken = refreshToken =>
  window.localStorage.setItem('refreshToken', refreshToken)

export const getRefreshToken = () => window.localStorage.getItem('refreshToken')

export const unsetTokens = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('refreshToken')
}
