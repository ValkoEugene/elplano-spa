import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../../FormsFormik/TextField'
import MultiselectField from '../../FormsFormik/MultiselectField'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  title: Yup.string('Введите Название').required('Обязательное поле'),
})

LessonEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  lecturersList: PropTypes.array.isRequired,
}

function LessonEditForm({
  isNew,
  classes,
  onSubmit,
  onDelete,
  initialValues,
  lecturersList,
}) {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      render={ props => (
        <form onSubmit={ props.handleSubmit }>
          <TextField name="title" label="Название" { ...props } />

          {
            <MultiselectField
              name="lecturers"
              options={ lecturersList }
              label="Преподаватели"
              { ...props }
            />
          }

          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={ props.isSubmitting }
              className={ classes.button }
            >
              { isNew ? 'Создать' : 'Обновить' }
            </Button>

            { !isNew && (
              <Button
                variant="contained"
                color="secondary"
                type="button"
                className={ classes.button }
                onClick={ onDelete }
              >
                Удалить
              </Button>
            ) }
          </div>
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

export default withStyles(styles)(LessonEditForm)
