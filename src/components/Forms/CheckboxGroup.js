import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { Field } from 'redux-form'
import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@material-ui/core'

class CheckboxGroup extends Component {
  field = ({
    classes,
    input,
    row,
    legend,
    meta: { error, submitFailed },
    options,
  }) => {
    const inputValue = input.value
    const { name, onChange, onBlur, onFocus } = input

    const showError = Boolean(submitFailed && error)

    const checkboxes = options.map(({ label, value }, index) => {
      const handleChange = event => {
        const arr = [...inputValue]
        if (event.target.checked) {
          arr.push(value)
        } else {
          arr.splice(arr.indexOf(value), 1)
        }
        onBlur(arr)
        return onChange(arr)
      }

      const checked = inputValue.includes(value)

      return (
        <FormGroup key={ `checkbox-${index}` }>
          <FormControlLabel
            control={
              <Checkbox
                name={ `${name}[${index}]` }
                checked={ checked }
                onChange={ handleChange }
                onFocus={ onFocus }
                value={ value }
              />
            }
            label={ label }
          />
        </FormGroup>
      )
    })

    return (
      <FormControl error={ showError } component="div" margin="normal" fullWidth>
        <FormLabel component="legend">{ legend }</FormLabel>

        <div
          className={ classNames({
            [classes.row]: row,
          }) }
        >
          { checkboxes }
        </div>

        { showError ? <FormHelperText>{ error }</FormHelperText> : null }
      </FormControl>
    )
  }

  render() {
    return <Field { ...this.props } type="checkbox" component={ this.field } />
  }
}

const styles = theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default withStyles(styles, { withTheme: true })(CheckboxGroup)
