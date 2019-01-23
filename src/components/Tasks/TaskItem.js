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
          <div>
            <p className={ classes.secondaryTitle }>Дедалайн: { date }</p>

            <p className={ classes.lesson }>{ lesson.title }</p>
          </div>

          <div>
            <PersonAvatar person={ author } showNameText={ false } />
          </div>
        </div>

        <div className={ classes.padding }>
          <FormControlLabel
            control={ <Checkbox color="primary" checked={ done } /> }
            label={ done ? 'Выполнено' : 'Активное' }
          />

          <p>{ title }</p>

          <p className={ classes.secondaryTitle }>Комментарии: { commentsCount }</p>

          <p className={ classes.secondaryTitle }>Дата создания: { createdDate }</p>
        </div>

        <Divider />

        <div className={ classes.padding }>
          <Button size="small" variant="outlined" color="primary">
            Подробности
          </Button>
        </div>
      </Paper>
    )
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    // height: '100%', Растянет блок с задачей
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    ...theme.custom.cardHeaderSpaceBetween,
  },
  lesson: {
    ...theme.custom.primaryTitle,
  },
  secondaryTitle: {
    ...theme.custom.secondaryTitle,
  },
  padding: {
    padding: 15,
  },
})

export default withStyles(styles, { withTheme: true })(TaskItem)
