import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

function ThemeColor({ classes }) {
  return (
    <div className={ classes.root }>
      <div>
        <div className={ classes.primaryMain }> primary main </div>
        <div className={ classes.primaryLight }> primary light </div>
        <div className={ classes.primaryDark }> primary dark </div>
      </div>
      <div>
        <div className={ classes.seconadryMain }> seconadry main </div>
        <div className={ classes.seconadryLight }> seconadry light </div>
        <div className={ classes.seconadryDark }> seconadry dark </div>
      </div>
    </div>
  )
}

const styles = theme => ({
  root: {
    display: 'flex',
  },
  primaryMain: {
    padding: 50,
    background: theme.palette.primary.main,
  },
  primaryDark: {
    padding: 50,
    background: theme.palette.primary.dark,
  },
  primaryLight: {
    padding: 50,
    background: theme.palette.primary.light,
  },
  seconadryMain: {
    padding: 50,
    background: theme.palette.secondary.main,
  },
  seconadryLight: {
    padding: 50,
    background: theme.palette.secondary.light,
  },
  seconadryDark: {
    padding: 50,
    background: theme.palette.secondary.dark,
  },
})

export default withStyles(styles, { withTheme: true })(ThemeColor)
