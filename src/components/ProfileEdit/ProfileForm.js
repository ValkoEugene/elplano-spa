import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '../FormsFormik/TextField'
import { Formik } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  full_name: Yup.string('ФИО').required('Обязательное поле'),
  email: Yup.string('Введите email')
    .email('Введите валидный email')
    .required('Обязательное поле'),
})

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
}

function ProfileForm({ onSubmit, initialValues, classes }) {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      render={ props => (
        <form onSubmit={ props.handleSubmit }>
          <TextField name="full_name" label="ФИО" { ...props } />
          <TextField name="email" label="Email" { ...props } />
          <TextField name="phone" label="Телефон" { ...props } />
          <TextField name="about" label="Описание" { ...props } />
          <TextField
            name="social_networks_twitter"
            label="twitter"
            { ...props }
          />
          <TextField
            name="social_networks_facebook"
            label="facebook"
            { ...props }
          />
          <TextField name="social_networks_vk" label="vk" { ...props } />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={ classes.button }
            disabled={ props.isSubmitting }
          >
            Обновить
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

export default withStyles(styles)(ProfileForm)
