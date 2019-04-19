import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '../Forms/TextField'
import validators from '../../utils/validators'

const schema = [
  {
    name: 'full_name',
    component: TextField,
    label: 'ФИО',
  },
  {
    name: 'email',
    component: TextField,
    label: 'Email',
    type: 'email',
  },
  {
    name: 'phone',
    component: TextField,
    label: 'Телефон',
  },
  {
    name: 'about',
    component: TextField,
    label: 'Описание',
  },
  {
    name: 'social_networks_twitter',
    component: TextField,
    label: 'twitter',
  },
  {
    name: 'social_networks_facebook',
    component: TextField,
    label: 'facebook',
  },
  {
    name: 'social_networks_vk',
    component: TextField,
    label: 'vk',
  },
]

const validate = ({ name, email }) => ({
  name: validators.required(name),
  email: validators.required(email) || validators.email(email),
})

class ProfileForm extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    initialValues: PropTypes.object.isRequired,
  }

  render() {
    const { handleSubmit, classes } = this.props

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
      </form>
    )
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

ProfileForm = withStyles(styles)(ProfileForm)

ProfileForm = reduxForm({
  form: 'profileEdit',
  validate,
  enableReinitialize: true,
})(ProfileForm)

export default ProfileForm
