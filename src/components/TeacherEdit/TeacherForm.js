import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../Forms/TextField'
import validators from '../../utils/validators'

const schema = [
  {
    name: 'first_name',
    component: TextField,
    label: 'Имя',
  },
  {
    name: 'last_name',
    component: TextField,
    label: 'Фамилия',
  },
  {
    name: 'patronymic',
    component: TextField,
    label: 'Отчество',
  },
]

const validate = ({ first_name, last_name, patronymic }) => ({
  first_name: validators.required(first_name),
  last_name: validators.required(last_name),
  patronymic: validators.required(patronymic),
})

class TeacherForm extends Component {
  render() {
    const { handleSubmit, initDeleteTeacher, classes } = this.props

    const fields = schema.map(item => <Field { ...item } key={ item.name } />)

    return (
      <form onSubmit={ handleSubmit }>
        { fields }

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={ classes.button }
        >
          Сохранить
        </Button>

        <Button
          variant="contained"
          color="secondary"
          type="button"
          className={ classes.button }
          onClick={ initDeleteTeacher }
        >
          Удалить
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ event }) => ({
  initialValues: event.currentTeacher,
})

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

TeacherForm = withStyles(styles)(TeacherForm)

TeacherForm = reduxForm({
  form: 'newTeacher',
  validate,
  enableReinitialize: true,
})(TeacherForm)

TeacherForm = connect(mapStateToProps)(TeacherForm)

export default TeacherForm
