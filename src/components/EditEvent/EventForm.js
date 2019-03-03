import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import TextField from '../Forms/TextField'
import CheckboxGroup from '../Forms/CheckboxGroup'
import validators from '../../utils/validators'

const schema = [
  {
    name: 'title',
    component: TextField,
    label: 'Заголовок',
  },
  {
    name: 'description',
    component: TextField,
    label: 'Описание',
  },
  {
    name: 'start_at',
    type: 'date',
    component: TextField,
    label: 'Дата начала',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    name: 'end_at',
    type: 'date',
    component: TextField,
    label: 'Дата завершения',
    InputLabelProps: {
      shrink: true,
    },
  },
  {
    name: 'by_day',
    component: CheckboxGroup,
    legend: 'Дни недели',
    row: true,
    options: [
      { label: 'ПН', value: 'MO' },
      { label: 'ВТ', value: 'TU' },
      { label: 'СР', value: 'WE' },
      { label: 'ЧТ', value: 'TH' },
      { label: 'ПТ', value: 'FR' },
      { label: 'СБ', value: 'SA' },
      { label: 'ВС', value: 'SU' },
    ],
  },
]

const validate = ({ title, start_at, end_at, by_day }) => ({
  title: validators.required(title),
  start_at: validators.required(start_at),
  end_at: validators.required(end_at),
  by_day: validators.required(by_day),
})

class EventForm extends Component {
  render() {
    const { handleSubmit } = this.props

    const fields = schema.map(item => <Field { ...item } key={ item.name } />)

    return (
      <form onSubmit={ handleSubmit }>
        { fields }

        <Button variant="contained" color="primary" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }
}

const mapStateToProps = ({ event }) => ({
  initialValues: event.currentEvent,
})

EventForm = reduxForm({
  form: 'newEvent',
  validate,
  enableReinitialize: true,
})(EventForm)

EventForm = connect(mapStateToProps)(EventForm)

export default EventForm
