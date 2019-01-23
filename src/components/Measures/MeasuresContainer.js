import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Measures from './index'
import { loadMeasures } from '../../actions/MeasuresActions'

const mapStateToProps = ({ measures }) => ({
  loading: measures.loading,
  measures: measures.measuresList,
})

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadMeasures()),
})

class MeasuresContainer extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    measures: PropTypes.array.isRequired,
    loadData: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadData()
  }

  render() {
    return <Measures { ...this.props } />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeasuresContainer)
