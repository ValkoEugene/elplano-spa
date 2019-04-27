import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Portlet from '../UI-core/Portlet'
import Chip from '@material-ui/core/Chip'

LessonItem.proptypes = {
  classes: PropTypes.object.isRequired,
  lesson: PropTypes.object.isRequired,
}

function LessonItem({ classes, title, lecturers, lecturersList }) {
  /**
   * Получить отображение преподавателя
   * @param {String} id - id преподавателя
   * @returns {String} отображение преподавателя
   *
   */
  const getLuctureView = id => {
    const lecture = lecturersList.find(item => item.id === id)

    return lecture ? lecture.view : null
  }

  /**
   * Бэйджики с преподавателями
   * @type {JSX}
   */
  const lecturersChips = lecturers.length
    ? lecturers.map(({ id }) => (
        <Chip
          label={ getLuctureView(id) }
          className={ classes.chip }
          color="primary"
        />
      ))
    : '-'

  return (
    <Portlet className={ classes.wrapper } padding={ 10 }>
      <p className={ classes.lessonTitle }>{ title }</p>
      <span>Преподаватели:</span> { lecturersChips }
    </Portlet>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  lessonTitle: {
    ...theme.custom.primaryTitle,
  },
})

export default withStyles(styles, { theme: true })(LessonItem)
