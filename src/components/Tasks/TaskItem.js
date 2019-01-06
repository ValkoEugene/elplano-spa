import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import PersonAvatar from '../PersonAvatar'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

class TaskItem extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    lesson: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    author: PropTypes.object.isRequired,
    createdDate: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
  }

  render() {
    const {
      classes,
      title,
      done,
      date,
      author,
      createdDate,
      commentsCount,
      lesson,
    } = this.props

    console.log(this.props.theme)

    return (
      <Paper className={ classes.root }>
        <div className={ classes.header }>
          <p className={ classes.lesson }>{ lesson.title }</p>
          <FormControlLabel
            control={ <Checkbox checked={ done } value="jason" /> }
            label={ done ? 'Выполнено' : 'Активное' }
          />
        </div>

        <div className={ classes.body }>
          { /* <PersonAvatar rootClassName={ classes.avatar } person={ author } /> */ }

          <p>{ title }</p>

          <Divider variant="middle" />

          <div className={ classes.dateWrapper }>
            <div>
              <p className={ classes.secondaryTitle }>Дедалайн:</p>
              <p className={ classes.dateValue }>{ date }</p>
            </div>

            <div>
              <p className={ classes.secondaryTitle }>Дата создания:</p>
              <p className={ classes.dateValue }>{ createdDate }</p>
            </div>
          </div>

          <p className={ classes.secondaryTitle }>Комментарии: { commentsCount }</p>
        </div>

        <div className={ classes.footer }>
          <Button color="secondary">Подробнее</Button>
        </div>
      </Paper>
    )
  }
}

const styles = theme => ({
  root: {
    ...theme.custom.shadow,
    width: '100%',
    // height: '100%', Растянет блок с задачей
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    ...theme.custom.borderRadiusTop,
    background: theme.custom.background,
    padding: 15,
  },
  lesson: {
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
    margin: 0,
    marginTop: 5,
  },
  secondaryTitle: {
    textAlign: 'center',
    margin: 0,
    color: 'gray',
    fontSize: 14,
  },
  body: {
    padding: 15,
  },
  footer: {
    background: theme.custom.background,
    padding: 15,
    ...theme.custom.borderRadiusBottom,
  },
  dateWrapper: {
    display: 'flex',
    textAlign: 'left',
    padding: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dateValue: {
    margin: 0,
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
})

export default withStyles(styles, { withTheme: true })(TaskItem)
