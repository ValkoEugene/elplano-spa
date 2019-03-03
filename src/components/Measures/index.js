import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'
import MeasureItem from './MeasureItem'

class Measures extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    measures: PropTypes.array.isRequired,
  }

  render() {
    const { loading, measures } = this.props

    const measuresItems = measures.map(item => (
      <MeasureItem { ...item } key={ item.id } />
    ))

    return <div>{ loading ? <Loader /> : measuresItems }</div>
  }
}

export default Measures
