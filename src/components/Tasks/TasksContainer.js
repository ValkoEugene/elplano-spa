import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadTasks } from '../../actions/TasksAction'
import Tasks from './index'

const mapStateToProps = ({ tasks }) => ({
  loading: tasks.loading,
  error: tasks.error,
  tasks: tasks.tasksList,
})

const mapDispatchToProps = dispatch => ({
  loadTasks: () => dispatch(loadTasks()),
})

class TasksContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired,
    loadTasks: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadTasks()
  }

  render() {
    return <Tasks {...this.props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer)
