import React from 'react'
import { DateTimePicker } from 'material-ui-pickers'

export default ({
  input: { onChange, value },
  label,
  meta: { error, submitFailed },
  ...custom
}) => (
  <DateTimePicker
    error={ Boolean(submitFailed && error) }
    helperText={ Boolean(submitFailed && error) && error }
    value={ value }
    onChange={ onChange }
    label={ label }
    format={ 'LLL' }
    invalidLabel={ '' }
    margin="normal"
    fullWidth
  />
)
