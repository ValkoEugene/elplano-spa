import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const PersonAvatar = ({ classes, person, showNameText = true }) => {
  const { name, avatar } = person

  return (
    <div className={ classes.wrapper }>
      <Avatar alt={ name } src={ avatar } className={ classes.avatar } />
      { showNameText && name }
    </div>
  )
}

PersonAvatar.proptypes = {
  classes: PropTypes.object.isRequired,
  teacher: PropTypes.object.isRequired,
}

const styles = theme => ({
  avatar: {
    margin: 5,
    width: 40,
    height: 40,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
})

export default withStyles(styles)(PersonAvatar)
