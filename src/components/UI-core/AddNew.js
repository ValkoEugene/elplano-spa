import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

AddNew.propTypes = {
  addLink: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
}

function AddNew({ addLink, classes }) {
  return (
    <Fab
      component={ Link }
      color="primary"
      size="large"
      aria-label="Add"
      to={ addLink }
      className={ classes.fab }
    >
      <AddIcon />
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

export default withStyles(styles)(AddNew)
