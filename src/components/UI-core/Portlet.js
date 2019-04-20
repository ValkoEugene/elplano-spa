import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

Portlet.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  padding: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
}

Portlet.defaultProps = {
  padding: 25,
  margin: 25,
}

function Portlet({ children, classes, padding, margin }) {
  return (
    <Paper
      className={ classes.paper }
      style={ { padding: `${padding}px`, margin: `${margin}px` } }
    >
      { children }
    </Paper>
  )
}

const styles = theme => ({
  paper: {
    ...theme.custom.shadow,
  },
})

export default withStyles(styles, { withTheme: true })(Portlet)
