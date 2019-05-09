import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '../FormsFormik/TextField'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { withStyles } from '@material-ui/core/styles'
import { resetPassword as resetPasswordApi } from '../../api/PasswordApi'
import { withSnackbar } from 'notistack'

const validationSchema = Yup.object({
  email: Yup.string('Введите email')
    .email('Введите валидный email')
    .required('Обязательное поле'),
})

ResetPassword.propTypes = {
  classes: PropTypes.object.isRequired,
}

function ResetPassword({ classes, enqueueSnackbar }) {
  const [isReset, setIsReset] = useState(false)

  const onSubmit = async (data, actions) => {
    console.log(data)
    console.log(actions)

    resetPasswordApi(data)
      .then(response => {
        console.log(response)
        setIsReset(true)
        return
      })
      .catch(error => {
        console.error('error', error)
        enqueueSnackbar(error.message, {
          variant: 'error',
        })
      })
      .then(() => {
        actions.setSubmitting(false)
        return
      })

    // try {
    //   const response = await resetPasswordApi(data)
    //   console.log(response)
    //   setIsReset(true)
    // } catch (error) {
    //   console.error('error', error)
    //   enqueueSnackbar(error.message, {
    //     variant: 'error',
    //   })
    // } finally {
    //   actions.setSubmitting(false)
    // }
  }

  return !isReset ? (
    <Formik
      initialValues={ { email: '' } }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      render={ props => (
        <form onSubmit={ props.handleSubmit }>
          <TextField name="email" label="Email" { ...props } />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={ classes.button }
            disabled={ props.isSubmitting }
          >
            Сбросить пароль
          </Button>
        </form>
      ) }
    />
  ) : (
    <p>
      Для сброса пароля перейдите по ссылке отправленной на указанную почту.
    </p>
  )
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

export default withStyles(styles)(withSnackbar(ResetPassword))
