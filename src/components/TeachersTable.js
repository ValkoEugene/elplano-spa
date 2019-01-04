import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TeacherName from './TeacherName'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
})

class TeachersTables extends React.Component {
  state = {
    tableHeadsTitle: ['Преводаватель', 'Предметы']
  }

  render() {
    const { teachers, classes } = this.props
    const { tableHeadsTitle } = this.state

    const tableHeadsRow = tableHeadsTitle.map(item => 
      <TableCell align="left" key={item}>
        { item }
      </TableCell>
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
            {teachers.map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell align="left" >
                    <TeacherName teacher={row} />
                  </TableCell>

                  <TableCell align="left">
                    { row.lesson.map(item => item.title).join(', ') }
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    )
  }
}

TeachersTables.propTypes = {
  teachers: PropTypes.array.isRequired
}

export default withStyles(styles)(TeachersTables)