import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../FormsFormik/TextField'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  number: Yup.string('Введите Номер').required('Обязательное поле'),
  title: Yup.string('Введите Название').required('Обязательное поле'),
})

GroupInfoForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object.isRequired,
}

function GroupInfoForm({ classes, onSubmit, initialValues }) {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      render={ props => (
        <form onSubmit={ props.handleSubmit }>
          <TextField name="number" label="Название" { ...props } />

          <TextField name="title" label="Номер" { ...props } />

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

export default withStyles(styles)(GroupInfoForm)
