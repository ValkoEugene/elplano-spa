import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '../Forms/TextField'
import validators from '../../utils/validators'

const schema = [
  {
    name: 'username',
    component: TextField,
    label: 'Логин',
    type: 'text',
  },
  {
    name: 'email',
    component: TextField,
    label: 'Email',
    type: 'email',
  },
  {
    name: 'email_confirmation',
    component: TextField,
    label: 'Подтверждение Email',
    type: 'email',
  },
  {
    name: 'password',
    component: TextField,
    label: 'Пароль',
    type: 'password',
  },
  {
    name: 'password_confirmation',
    component: TextField,
    label: 'Подтверждение пароля',
    type: 'password',
  },
]

const validate = ({
  username,
  email,
  email_confirmation,
  password,
  password_confirmation,
}) => ({
  username: validators.required(username),
  email: validators.required(email) || validators.email(email),
  email_confirmation:
    validators.required(email_confirmation) ||
    validators.equal(email, email_confirmation, 'Должен совпадать с Email'),
  password: validators.required(password) || validators.password(password),
  password_confirmation:
    validators.required(password_confirmation) ||
    validators.equal(
      password,
      password_confirmation,
      'Пароли должны совпадать'
    ),
})

let RegistrateForm = props => {
  const { handleSubmit } = props

  const fields = schema.map(item => <Field { ...item } key={ item.name } />)

  return (
    <form onSubmit={ handleSubmit }>
      { fields }

      <Button variant="contained" color="primary" type="submit">
        Зарегистрироваться
      </Button>
    </form>
  )
}

RegistrateForm = reduxForm({
  form: 'registrate',
  validate,
})(RegistrateForm)

export default RegistrateForm
