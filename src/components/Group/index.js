import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../../plugins/axios'
import { withStyles } from '@material-ui/core/styles'
import StudentCard from './StudentCard'

GroupInvites.propTypes = {
  classes: PropTypes.object.isRequired,
  invites: PropTypes.array.isRequired,
}

function GroupInvites({ classes }) {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  /**
   * Инициализация данных
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/group/students')

        const data = response.data.data

        const formatedData = data.map(
          ({
            id,
            attributes: {
              full_name,
              email,
              phone,
              about,
              social_networks: { facebook, vk, twitter },
              president,
            },
          }) => ({
            id,
            full_name,
            email,
            phone,
            about,
            facebook,
            vk,
            twitter,
            president,
          })
        )

        setStudents(formatedData)

        setLoading(false)
      } catch (e) {
        setError(e)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      { students.map(item => (
        <StudentCard { ...item } key={ item.id } />
      )) }
    </div>
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
