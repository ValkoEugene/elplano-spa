import React, { Component } from 'react'
import { loginRequest } from '../api/index.js'

export default class Auth extends React.Component {
  state = {
    login: '',
    password: '',
  }

  onChangeHandler = ({ target }) => {
    const { value, name } = target

    this.setState({
      [name]: value
    })
  }

  auth = () => {
    const { login, password } = this.state
    if (!login || !password) {
      return
    }

    loginRequest({ login, password })
      .then(response => {
        this.props.history.push('/home/')
        console.log(response)
      })
      .catch(error => console.error(`Ошибка: ${error}`))
  }
  
  render() {
    return (
      <div>
        <label>
          Логин
          <input name="login" type="text" value={this.state.login} onChange={this.onChangeHandler} />
        </label>

        <label>
          Пароль
          <input name="password" type="password" value={this.state.password} onChange={this.onChangeHandler} />
        </label>

        <div>
          <button type="button" onClick={this.auth}>
            login
          </button>
        </div>
      </div>
    )
  }
}