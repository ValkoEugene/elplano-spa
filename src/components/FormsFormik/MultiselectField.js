import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Chip from '@material-ui/core/Chip'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import { withStyles } from '@material-ui/core/styles'

const MultiselectField = ({
  classes,
  options,
  name,
  values,
  label,
  errors,
  touched,
  handleChange,
  isValid,
  setFieldTouched,
  setFieldValue,
  children,
  ...custom
}) => {
  /**
   * Изменение значения
   * @param {String} name - наименование поля
   * @param {Object} e - объект события
   */
  const change = (name, e) => {
    const { value } = e.target

    setFieldValue(name, value)
    setFieldTouched(name, true, false)
  }

  /**
   * Получить отображение элемента
   * @param {String} value - значение элемента
   * @returns {String}
   */
  const getItemView = value => {
    const option = options.find(item => item.value === value)

    return option ? option.view : null
  }

  /**
   * Список вариантов выбора
   * @type {JSX}
   */
  const optionsList = options.map(option => (
    <MenuItem key={ option.value } value={ option.value }>
      { option.view }
    </MenuItem>
  ))

  /**
   * Получить список выбранных элементов
   * @param {Array} selected - список выбранных значений
   * @returns {JSX}
   */
  const getSelectedList = selected => (
    <div className={ classes.chips }>
      { selected.map(value => (
        <Chip key={ value } label={ getItemView(value) } className={ classes.chip } />
      )) }
    </div>
  )

  return (
    <FormControl className={ classes.formControl }>
      <InputLabel htmlFor="select-multiple-chip">{ label }</InputLabel>
      <Select
        multiple
        value={ values[name] }
        onChange={ change.bind(null, name) }
        input={ <Input id="select-multiple-chip" /> }
        renderValue={ selected => getSelectedList(selected) }
      >
        { optionsList }
      </Select>
    </FormControl>
  )
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit / 4,
  },
  noLabel: {
    marginTop: theme.spacing.unit * 3,
  },
})

export default withStyles(styles)(MultiselectField)
