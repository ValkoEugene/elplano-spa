import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import GroupTable from './GroupTable'
import PaperHeader from './PaperHeader'

const mapStateToProps = ({ group }) => ({
  group: group.groupList,
})

class Group extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    group: PropTypes.array.isRequired,
  }

  render() {
    const { classes, group } = this.props

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <PaperHeader title="Список одногрупников" showInput={ true } />

        <GroupTable group={ group } />
      </Paper>
    )
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

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(Group)
)
