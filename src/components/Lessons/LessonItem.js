import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

LessonItem.proptypes = {
  classes: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
}

function LessonItem({ classes, lesson }) {
  return <Paper className={ classes.wrapper }>lesson</Paper>
}

const styles = theme => ({})

export default withStyles(styles, { theme: true })(LessonItem)
