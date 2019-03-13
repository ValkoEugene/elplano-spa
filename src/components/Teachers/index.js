import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TeachersTable from './TeachersTable.js'
import Loader from '../Loader.js'
import { loadTeachers } from '../../actions/TeachersActions.js'
import PaperHeader from '../PaperHeader'
import Alert from '../UI-core/Alert'
import AddNew from '../UI-core/AddNew'

const mapStateToProps = ({ teachers }) => ({
  teachers: teachers.teachersList,
  loading: teachers.loading,
})

const mapDispatchToProps = dispatch => ({
  loadTeachers: () => dispatch(loadTeachers()),
})

class Teachers extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    teachers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    loadTeachers: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadTeachers()
  }

  render() {
    const { classes, teachers, loading } = this.props

    const emptyTable = <Alert color="warning">Нет преподавателей</Alert>

    const table = (
      <Paper className={ classes.root } elevation={ 1 }>
        <PaperHeader title="Список преподавателей" showInput={ false } />
        <TeachersTable teachers={ teachers } />
      </Paper>
    )

    const content = (
      <div>
        { teachers.length ? table : emptyTable }
        <AddNew addLink="/teachers/edit" />
      </div>
    )

    return loading ? <Loader /> : content
  }
}

const styles = theme => ({
  root: {
    ...theme.custom.shadow,
  },
  avatar: {
    margin: 10,
  },
  title: {
    color: theme.palette.primary.light,
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Teachers))
