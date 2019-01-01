import React, { Comopnent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import GroupTable from './GroupTable'

const styles = theme => ({
  root: {
    padding: 15
  },
  avatar: {
    margin: 10,
  },
  title: {
    color: theme.palette.primary.light 
  }
})

class Group extends React.Component {
  render() {
    const { classes, group } = this.props

    return (
      <Paper className={ classes.root } elevation={ 1 }>
        <h4 className={ classes.title }>Список одногрупников</h4>

        <GroupTable group={ group } />
      </Paper>
    )
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  group: PropTypes.array.isRequired
}

const mapStateToProps = ({ group }) => ({
  group: group.groupList,
})

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Group))