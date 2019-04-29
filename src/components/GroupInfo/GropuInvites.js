import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Portlet from '../UI-core/Portlet'
import Typography from '@material-ui/core/Typography'
import axios from '../../plugins/axios'
import moment from '../../plugins/moment'

GroupInvites.propTypes = {
  classes: PropTypes.object.isRequired,
  invites: PropTypes.array.isRequired,
}

function GroupInvites({ classes }) {
  const [invites, setInvites] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Инициализация данных
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/group/invites')

        const data = response.data.data

        const formatedInvites = data.map(
          ({ id, attributes: { email, sent_at, status, accepted_at } }) => ({
            id,
            email,
            sent_at,
            status,
            accepted_at,
          })
        )

        setInvites(formatedInvites)

        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  const tableHeadsTitle = [
    'Email',
    'Статус',
    'Дата приглашения',
    'Дата принятия приглашения',
  ]

  const formatDate = date => (date ? moment(date).format('LLLL') : '-')

  const tableHeadsRow = tableHeadsTitle.map(item => (
    <TableCell align="left" key={ item }>
      { item }
    </TableCell>
  ))

  const createGroupInvitesItemRow = row => (
    <TableRow key={ row.id }>
      <TableCell align="left">{ row.email }</TableCell>

      <TableCell align="left">{ row.status }</TableCell>

      <TableCell align="left">{ formatDate(row.sent_at) }</TableCell>

      <TableCell align="left">{ formatDate(row.accepted_at) }</TableCell>
    </TableRow>
  )

  return (
    <Portlet>
      <Typography variant="h6" color="primary">
        Приглашения
      </Typography>

      <div className={ classes.root }>
        <Table>
          <TableHead>
            <TableRow>{ tableHeadsRow }</TableRow>
          </TableHead>

          <TableBody>
            { invites.map(row => createGroupInvitesItemRow(row)) }
          </TableBody>
        </Table>
      </div>
    </Portlet>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
})

export default withStyles(styles, { withTheme: true })(GroupInvites)
