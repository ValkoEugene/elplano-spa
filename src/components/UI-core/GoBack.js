import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import BackIcon from '@material-ui/icons/Reply'

GoBack.propTypes = {
  addLink: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

function GoBack({ link, classes }) {
  return (
    <Fab
      component={ Link }
      color="primary"
      size="large"
      aria-label="Add"
      to={ link }
      className={ classes.fab }
    >
      <BackIcon />
    </Fab>
  )
}

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: 15,
    right: 15,
  },
})

export default withStyles(styles)(GoBack)
