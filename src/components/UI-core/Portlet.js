import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

Portlet.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
  padding: PropTypes.number.isRequired,
}

Portlet.defaultProps = {
  padding: 25,
}

function Portlet({ children, classes, padding, margin }) {
  return (
    <Paper className={ classes.paper } style={ { padding: `${padding}px` } }>
      { children }
    </Paper>
  )
}

const styles = theme => ({
  paper: {
    ...theme.custom.shadow,
    [theme.breakpoints.down('sm')]: {
      margin: 10,
    },
    [theme.breakpoints.up('sm')]: {
      margin: 25,
    },
  },
})

export default withStyles(styles, { withTheme: true })(Portlet)
