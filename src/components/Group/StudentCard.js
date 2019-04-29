import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Portlet from '../UI-core/Portlet'
import Chip from '@material-ui/core/Chip'
import MoreMenu from '../UI-core/MoreMenu'

StudentCard.proptypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  lecturers: PropTypes.array.isRequired,
  lecturersList: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

function StudentCard({
  classes,
  id,
  full_name,
  email,
  phone,
  about,
  facebook,
  vk,
  twitter,
  president,
}) {
  return (
    <Portlet padding={ 10 }>
      <div className={ classes.contentWrapper }>
        <p className={ classes.title }>{ full_name }</p>
        <p className={ classes.info }>Телефон: { phone || '-' }</p>
        <p className={ classes.info }>Email: { email || '-' }</p>
        <p className={ classes.info }>VK: { vk || '-' }</p>
        <p className={ classes.info }>Facebook: { facebook || '-' }</p>
        <p className={ classes.info }>Twitter: { twitter || '-' }</p>
        <p className={ classes.info }>О себе: { about || '-' }</p>
      </div>
    </Portlet>
  )
}

const styles = theme => ({
  contentWrapper: {},
  title: {
    fontWeight: 500,
    fontSize: 16,
    color: '#5F6368',
  },
  info: {
    fontSize: 14,
    color: '#5f6368cc',
  },
})

export default withStyles(styles, { theme: true })(StudentCard)
