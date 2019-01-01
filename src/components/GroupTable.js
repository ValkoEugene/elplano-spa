import React, { Comopnent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  avatar: {
    margin: 5,
    width: 40,
    height: 40,
  },
  nameCell: {
    display: 'flex',
    alignItems: 'center'
  }
})

class Group extends React.Component {
  state = {
    tableHeadsTitle: ['ФИО', 'Телефон', 'Почта'],
  }

  render() {
    const { classes, group } = this.props
    const { tableHeadsTitle } = this.state

    const tableHeadsRow = tableHeadsTitle.map(item => 
      <TableCell align="left" key={item}>
        { item }
      </TableCell>
    )

    const createGroupItemRow = row => (
      <TableRow key={row.id}>
        <TableCell align="left" className={ classes.nameCell }>
          <Avatar alt={ row.name } src={ row.avatar } className={classes.avatar} />
          { row.name }
        </TableCell>

        <TableCell align="left">
          { row.tel }
        </TableCell>

        <TableCell align="left">
          { row.email }
        </TableCell>
      </TableRow>
    )

    return (
      <div className={ classes.root }>
        <Table>

          <TableHead>
            <TableRow>
              { tableHeadsRow }
            </TableRow>
          </TableHead>

          <TableBody>
            { group.map(row => createGroupItemRow(row)) }
          </TableBody>
        </Table>
      </div>
    )
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  group: PropTypes.array.isRequired
}

export default withStyles(styles, { withTheme: true })(Group)