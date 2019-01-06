import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import PersonAvatar from '../PersonAvatar'

MeasureItem.propTypes = {
  classes: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

function MeasureItem({ classes, author, date, title, text }) {
  return (
    <Paper>
      <div className={ classes.header }>
        <div>
          <p className={ classes.secondaryTitle }>Дата: { date }</p>
          <p className={ classes.primaryTitle }>{ title }</p>
        </div>

        <div>
          <PersonAvatar person={ author } />
        </div>
      </div>

      { text && <p className={ classes.body }>{ text }</p> }
    </Paper>
  )
}

const styles = theme => ({
  secondaryTitle: {
    ...theme.custom.secondaryTitle,
  },
  primaryTitle: {
    ...theme.custom.primaryTitle,
  },
  header: {
    ...theme.custom.cardHeaderSpaceBetween,
  },
  body: {
    padding: 15,
    marginTop: 0,
  },
})

export default withStyles(styles)(MeasureItem)
