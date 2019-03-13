import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Teacher from './index'

import {
  createTeacher,
  loadTeacher,
  updateTeacher,
  deleteTeacher,
} from '../../actions/TeacherActions'

const mapStateToProps = ({ event: { loading, error, currentTeacher } }) => ({
  loading,
  error,
  currentTeacher,
})

const mapDispatchToProps = dispatch => ({
  createTeacher: data => dispatch(createTeacher(data)),
  loadTeacher: id => dispatch(loadTeacher(id)),
  updateTeacher: data => dispatch(updateTeacher(data)),
  deleteTeacher: id => dispatch(deleteTeacher(id)),
})

class TeacherEditContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    currentTeacher: PropTypes.object.isRequired,
    createTeacher: PropTypes.func.isRequired,
    loadTeacher: PropTypes.func.isRequired,
    updateTeacher: PropTypes.func.isRequired,
  }

  render() {
    return <Teacher { ...this.props } />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherEditContainer)
