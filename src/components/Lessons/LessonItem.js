import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Portlet from '../UI-core/Portlet'
import Chip from '@material-ui/core/Chip'
import MoreMenu from '../UI-core/MoreMenu'

LessonItem.proptypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  lecturers: PropTypes.array.isRequired,
  lecturersList: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

function LessonItem({ id, classes, title, lecturers, lecturersList, history }) {
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

  /**
   * Опции для меню
   * @type {Array}
   */
  const MoreMenuOptions = [
    {
      title: 'Редактировать',
      onClick: () => history.push(`/lessons/edit?id=${id}`),
    },
  ]

  return (
    <Portlet padding={ 10 }>
      <div className={ classes.contentWrapper }>
        <div className={ classes.content }>
          <p className={ classes.lessonTitle }>{ title }</p>
          <span>Преподаватели:</span> { lecturersChips }
        </div>

        <MoreMenu options={ MoreMenuOptions } />
      </div>
    </Portlet>
  )
}

const styles = theme => ({
  contentWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  lessonTitle: {
    ...theme.custom.primaryTitle,
    marginBottom: 5,
  },
})

export default withRouter(withStyles(styles, { theme: true })(LessonItem))
