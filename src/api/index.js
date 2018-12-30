const loginRequest = ({ login, password }) => Promise.resolve({
  login, password, login_timestamp: new Date()
})

export { loginRequest }