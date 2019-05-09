import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { updatePassword } from '../../api/PasswordApi'
import UpdatePasswordForm from './UpdatePasswordForm'
import { withSnackbar } from 'notistack'
import Portlet from '../UI-core/Portlet'
import Typography from '@material-ui/core/Typography'

function UpdatePassword({ history, enqueueSnackbar }) {
  const [token, setToken] = useState('')

  const submit = async (data, actions) => {
    try {
      await updatePassword(data)
      enqueueSnackbar('Пароль сброшен', { variant: 'success' })
      history.push('/auth')
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    } finally {
      actions.setSubmitting(false)
    }
  }

  return (
    <Portlet>
      <Typography variant="h6" color="primary">
        Новый пароль
      </Typography>

      <UpdatePasswordForm onSubmit={ submit } />
    </Portlet>
  )
}

export default withRouter(withSnackbar(UpdatePassword))
