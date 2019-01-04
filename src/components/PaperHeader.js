import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'

const PaperHeader = ({ classes, title, showInput }) => (
  <AppBar position="static" classes={ { root: classes.appBarRoot } }>
    <Toolbar className={ classes.toolBarRoot }>
      <Typography variant="h6" color="inherit" noWrap>
        { title }
      </Typography>

      { showInput ? (
        <InputBase
          placeholder="Поиск..."
          classes={ {
            root: classes.inputRoot,
            input: classes.inputInput,
          } }
        />
      ) : null }
    </Toolbar>
  </AppBar>
)

PaperHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  showInput: PropTypes.bool,
}

const styles = theme => ({
  appBarRoot: {
    background: theme.palette.secondary.main,
    ...theme.custom.borderRadiusTop,
  },
  toolBarRoot: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inputRoot: {
    color: 'white',
    width: '50%',
  },
  inputInput: {
    padding: 5,
    background: '#ffffff1c',
  },
})

export default withStyles(styles)(PaperHeader)
