import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Loader from '.././Loader'
import Grid from '@material-ui/core/Grid'
import TaskItem from './TaskItem'

class Tasks extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired,
    loadTasks: PropTypes.func.isRequired,
  }

  render() {
    const { classes, loading, tasks } = this.props

    const tasksItems = tasks.map(task => (
      <Grid item xs={ 12 } sm={ 6 } key={ task.id }>
        <TaskItem { ...task } />
      </Grid>
    ))

    return (
      <div>
        { /* <PaperHeader title="Список заданий" /> */ }

        { loading ? (
          <Loader />
        ) : (
          <Grid container spacing={ 24 } className={ classes.lessonsWrapper }>
            { tasksItems }
          </Grid>
        ) }
      </div>
    )
  }
}

const styles = theme => ({
  lessonsWrapper: {
    padding: 15,
  },
})

export default withStyles(styles)(Tasks)
