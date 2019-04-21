import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

Alert.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
}

function Alert({ color, children, classes }) {
  return (
    <Paper className={ classNames(classes[color], classes.root) }>
      { children }
    </Paper>
  )
}

const styles = theme => ({
  root: {
    color: '#fff',
    display: 'flex',
    padding: 15,
    fontSize: '1.2em',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  success: {
    background: theme.custom.success,
  },
  warning: {
    background: theme.palette.primary.light,
  },
  error: {
    background: theme.custom.error,
  },
})

export default withStyles(styles)(Alert)
