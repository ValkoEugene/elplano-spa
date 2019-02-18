import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

Portlet.propTypes = {
  children: PropTypes.any.isRequired,
  classes: PropTypes.object.isRequired,
}

function Portlet({ children, classes }) {
  return <Paper className={ classes.paper }>{ children }</Paper>
}

const styles = theme => ({
  paper: {
    padding: 25,
    paddingTop: 0,
    ...theme.custom.shadow,
  },
})

export default withStyles(styles, { withTheme: true })(Portlet)
