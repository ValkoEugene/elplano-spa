import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '../Forms/TextField'
import validators from '../../utils/validators'

const schema = [
  {
    name: 'login',
    component: TextField,
    label: 'Логин',
  },
  {
    name: 'password',
    component: TextField,
    label: 'Пароль',
    type: 'password',
  },
]

const validate = ({ login, password }) => ({
  login: validators.required(login),
  password: validators.required(password) || validators.password(password),
})

let LoginForm = props => {
  const { handleSubmit } = props

  const fields = schema.map(item => <Field { ...item } key={ item.name } />)

  return (
    <form onSubmit={ handleSubmit }>
      { fields }

      <Button variant="contained" color="primary" type="submit">
        Войти
      </Button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login',
  validate,
})(LoginForm)

export default LoginForm
