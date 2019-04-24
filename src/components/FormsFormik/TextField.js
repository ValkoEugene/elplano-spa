import React from 'react'
import { TextField } from '@material-ui/core'

export default ({
  name,
  values,
  label,
  errors,
  touched,
  handleChange,
  isValid,
  setFieldTouched,
  children,
  ...custom
}) => {
  const change = (name, e) => {
    e.persist()
    handleChange(e)
    setFieldTouched(name, true, false)
  }

  return (
    <TextField
      id={ name }
      error={ touched[name] && Boolean(errors[name]) }
      helperText={ touched[name] ? errors[name] : '' }
      value={ values[name] }
      onChange={ change.bind(null, name) }
      margin="normal"
      fullWidth
      variant="outlined"
      label={ label }
      { ...custom }
    >
      { children }
    </TextField>
  )
}
