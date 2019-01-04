import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'

const HomeWidget = ({ wrapperStyle, classes, text, count, icon }) => (
  <Paper className={ classes.paperWrapper }>
    <div className={ classes.wrapper } style={ wrapperStyle }>
      <div className={ classes.infoWrapper }>
        <p className={ classes.count }>{ count }</p>
        <p className={ classes.text }>{ text }</p>
      </div>

      <div className={ classes.iconWrapper }>
        <Icon className={ classes.icon }> { icon } </Icon>
      </div>
    </div>
  </Paper>
)

HomeWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  wrapperStyle: PropTypes.object,
  text: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
}

const styles = theme => ({
  paperWrapper: {
    ...theme.custom.shadow,
  },
  wrapper: {
    ...theme.custom.shadow,
    padding: 5,
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  infoWrapper: {
    padding: 5,
    width: '100%',
  },
  count: {
    margin: 0,
    fontSize: '34px',
    marginLeft: 5,
  },
  text: {
    padding: 5,
    margin: 0,
  },
  iconWrapper: {
    position: 'absolute',
    top: '10%',
    right: '5%',
    opacity: 0.1,
  },
  icon: {
    fontSize: '88px',
  },
})

export default withStyles(styles, { withTheme: true })(HomeWidget)
