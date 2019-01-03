import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Loader from './Loader'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import LessonItem from './LessonItem'
import { loadLessons } from '../actions/LessonsActions'

const styles = theme => ({
  appBarRoot: {
    background: theme.palette.secondary.main 
  },
  lessonsWrapper: {
    padding: 15
  },
  toolBarRoot: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  inputRoot: {
    color: 'white',
    width: '50%',
  },
  inputInput: {
    padding: 5,
    background: '#ffffff1c'
  },
})

class Lessons extends React.Component {
  componentWillMount() {
    this.props.loadLessons()
  }

  render () {
    const { lessons, loading, classes } = this.props

    const lessonsItems = lessons.map(item => 
      <Grid item xs={12} sm={6} key={ item.id }>
        <LessonItem lesson={ item } />
      </Grid>
    )
   
    return (
      <div>
        {
          loading ? (
            <Loader />
          ) : (
            <Paper className={ classes.rootWrapper }>
              
              <AppBar position="static" classes={ {root: classes.appBarRoot} }>
                <Toolbar className={ classes.toolBarRoot }>
                  <Typography variant="h6" color="inherit" noWrap>
                    Список предметов
                  </Typography>

                  <InputBase
                    placeholder="Поиск..."
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </Toolbar>
              </AppBar>

              <Grid container spacing={24} className={ classes.lessonsWrapper }>
                { lessonsItems }
              </Grid>
            </Paper>
          )
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