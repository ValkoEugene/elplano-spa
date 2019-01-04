import React, { Comopnent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TeachersTable from './TeachersTable.js'
import Loader from './Loader.js'
import { loadTeachers } from '../actions/TeachersActions.js'
import PaperHeader from './PaperHeader' 


const styles = theme => ({
  root: {
    ...theme.custom.shadow,
  },
  avatar: {
    margin: 10,
  },
  title: {
    color: theme.palette.primary.light 
  }
})

class Teachers extends React.Component {
  componentWillMount() {
    this.props.loadTeachers()
  }

  render() {
    const { classes, teachers, loading } = this.props

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <PaperHeader title="Список преподавателей" showInput={ true } />

        {
          loading ?
            <Loader /> 
            : <TeachersTable teachers={ teachers } />
        }
      </Paper>
    )
  }
}

Teachers.propTypes = {
  classes: PropTypes.object.isRequired,
  teachers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadTeachers: PropTypes.func.isRequired
}

const mapStateToProps = ({ teachers }) => ({
  teachers: teachers.teachersList,
  loading: teachers.loading
})

const mapDispatchToProps = dispatch => ({
  loadTeachers: () => dispatch(loadTeachers())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Teachers))