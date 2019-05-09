import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../FormsFormik/TextField'
import { Formik } from 'formik'
import * as Yup from 'yup'

// TODO сравнение password_confirmation с password
const validationSchema = Yup.object({
  password: Yup.string('Введите пароль').required('Обязательное поле'),
  password_confirmation: Yup.string('Введите подтверждение пароля').required(
    'Обязательное поле'
  ),
})

UpdatePasswordForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
}

function UpdatePasswordForm({ classes, onSubmit }) {
  return (
    <Formik
      onSubmit={ onSubmit }
      initialValues={ { password: '', password_confirmation: '' } }
      validationSchema={ validationSchema }
      render={ props => (
        <form onSubmit={ props.handleSubmit }>
          <TextField
            name="password"
            label="Пароль"
            type="password"
            { ...props }
          />

          <TextField
            name="password_confirmation"
            label="Подтверждение пароля"
            type="password"
            { ...props }
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={ props.isSubmitting }
            className={ classes.button }
          >
            Сохранить
          </Button>
        </form>
      ) }
    />
  )
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(styles)(UpdatePasswordForm)
