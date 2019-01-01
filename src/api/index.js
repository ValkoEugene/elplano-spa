const loginRequest = ({ login, password }) => Promise.resolve({
  login, login_timestamp: new Date()
})

export { loginRequest }