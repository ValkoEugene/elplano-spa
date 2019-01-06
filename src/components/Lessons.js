import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Loader from './Loader'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LessonItem from './LessonItem'
import { loadLessons } from '../actions/LessonsActions'
import PaperHeader from './PaperHeader'

const mapStateToProps = ({ lessons }) => ({
  loading: lessons.loading,
  error: lessons.error,
  lessons: lessons.lessonsList,
})

const mapDispatchToProps = dispatch => ({
  loadLessons: () => dispatch(loadLessons()),
})

class Lessons extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    lessons: PropTypes.array.isRequired,
    loadLessons: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadLessons()
  }

  render() {
    const { lessons, loading, classes } = this.props

    const lessonsItems = lessons.map(item => (
      <Grid item xs={ 12 } sm={ 6 } key={ item.id }>
        <LessonItem lesson={ item } />
      </Grid>
    ))

    return (
      <Paper className={ classes.paperRootWrapper }>
        <PaperHeader title="Список предметов" showInput={ true } />

        { loading ? (
          <Loader />
        ) : (
          <Grid container spacing={ 24 } className={ classes.lessonsWrapper }>
            { lessonsItems }
          </Grid>
        ) }
      </Paper>
    )
  }
}

const styles = theme => ({
  paperRootWrapper: {
    ...theme.custom.shadow,
  },
  lessonsWrapper: {
    padding: 15,
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Lessons))
