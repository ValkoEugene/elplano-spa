import React from 'react'
import { TextField } from '@material-ui/core'

export default ({
  input,
  label,
  meta: { error, submitFailed },
  children,
  ...custom
}) => (
  <TextField
    error={ Boolean(submitFailed && error) }
    helperText={ Boolean(submitFailed && error) && error }
    margin="normal"
    fullWidth
    label={ label }
    { ...custom }
    { ...input }
  >
    { children }
  </TextField>
)
