import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100
  }
})

const Loader = ({ classes, size }) => (
  <div className={ classes.loaderWrapper }>
    <CircularProgress size={ size || 50 }/>  
  </div>
)

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.number
}

export default (withStyles(styles, { withTheme: true }))(Loader)