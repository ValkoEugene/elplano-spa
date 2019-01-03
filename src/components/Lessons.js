import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Loader from './Loader'
import Grid from '@material-ui/core/Grid'
import LessonItem from './LessonItem'
import { loadLessons } from '../actions/LessonsActions'

const styles = theme => ({

})

class Lessons extends React.Component {
  componentWillMount() {
    this.props.loadLessons()
  }

  render () {
    const { lessons, loading } = this.props

    const lessonsItems = lessons.map(item => 
      <Grid item xs={12} sm={6} key={ item.id }>
        <LessonItem lesson={ item } />
      </Grid>
    )

    const lessonsWrapper = <Grid container spacing={24}> { lessonsItems } </Grid>
   
    return (
      <div>
        {
          loading ? <Loader /> 
          : lessonsWrapper
        }
      </div>
    )
  }
}

Lessons.propTypes = {
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  lessons: PropTypes.array.isRequired,
  loadLessons: PropTypes.func.isRequired
}

const mapStateToProps = ({ lessons }) => ({
  loading: lessons.loading,
  error: lessons.error,
  lessons: lessons.lessonsList
})

const mapDispatchToProps = dispatch => ({
  loadLessons: () => dispatch(loadLessons())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Lessons))