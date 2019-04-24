import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../FormsFormik/TextField'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string('Введите email')
    .email('Введите валидный email')
    .required('Обязательное поле'),
})

AddGroupMemberForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
}

function AddGroupMemberForm({ classes, onSubmit }) {
  return (
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
            disabled={ props.isSubmitting }
            className={ classes.button }
          >
            Отправить
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

export default withStyles(styles)(AddGroupMemberForm)
