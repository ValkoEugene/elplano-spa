import React, { Component } from 'react'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import PropTypes from 'prop-types'
import TeacherForm from './TeacherForm'
import Portlet from '../UI-core/Portlet'
import Loader from '../Loader'

class EditTeacher extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    currentTeacher: PropTypes.object.isRequired,
    createTeacher: PropTypes.func.isRequired,
    loadTeacher: PropTypes.func.isRequired,
    deleteTeacher: PropTypes.func.isRequired,
    updateTeacher: PropTypes.func.isRequired,
  }

  state = {
    teacherId: '',
  }

  componentDidMount() {
    const { location, loadTeacher } = this.props

    const { id } = queryString.parse(location.search)

    if (id) {
      this.setState({ teacherId: id })

      loadTeacher(id)
    }
  }

  formatData = ({ id, first_name, last_name, patronymic }) => {
    return {
      type: 'lecturer',
      attributes: {
        id,
        first_name,
        last_name,
        patronymic,
      },
    }
  }

  update = data => {
    const { teacherId } = this.state
    const { createTeacher, updateTeacher } = this.props

    const formatedData = this.formatData(data)

    teacherId ? updateTeacher(formatedData) : createTeacher(formatedData)

    // TODO : history.push
  }

  initDeleteTeacher = () => {
    this.props
      .deleteTeacher(this.state.teacherId)
      .then(() => this.props.history.push('/teachers'))
      .catch(error => console.error(`error catch: ${error}`))
  }

  render() {
    const { loading } = this.props

    return loading ? (
      <Loader />
    ) : (
      <Portlet>
        <TeacherForm
          onSubmit={ this.update }
          initDeleteTeacher={ this.initDeleteTeacher }
        />
      </Portlet>
    )
  }
}

export default withRouter(EditTeacher)
