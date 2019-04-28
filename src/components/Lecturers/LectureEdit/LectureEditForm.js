import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../../FormsFormik/TextField'
import MultiselectField from '../../FormsFormik/MultiselectField'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  first_name: Yup.string('Введите Имя').required('Обязательное поле'),
  last_name: Yup.string('Введите Фамилию').required('Обязательное поле'),
  patronymic: Yup.string('Введите Отчество').required('Обязательное поле'),
})

LectureEditForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  isNew: PropTypes.bool.isRequired,
  coursesOptions: PropTypes.array.isRequired,
}

function LectureEditForm({
  isNew,
  classes,
  onSubmit,
  onDelete,
  coursesOptions,
  initialValues,
}) {
  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={ onSubmit }
      validationSchema={ validationSchema }
      render={ props => (
        <form onSubmit={ props.handleSubmit }>
          <TextField name="first_name" label="Имя" { ...props } />
          <TextField name="last_name" label="Фамилия" { ...props } />
          <TextField name="patronymic" label="Отчество" { ...props } />

          {
            <MultiselectField
              name="courses"
              options={ coursesOptions }
              label="Предметы"
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

export default withStyles(styles)(LectureEditForm)
