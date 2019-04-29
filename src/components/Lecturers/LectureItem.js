import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Portlet from '../UI-core/Portlet'
import Chip from '@material-ui/core/Chip'
import MoreMenu from '../UI-core/MoreMenu'

LectureItem.proptypes = {
  id: PropTypes.string,
  classes: PropTypes.object.isRequired,
  lecture: PropTypes.string,
  courses: PropTypes.array.isRequired,
  coursesList: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
}

function LectureItem({
  id,
  classes,
  first_name,
  last_name,
  patronymic,
  courses,
  coursesList,
  history,
}) {
  /**
   * Получить отображение предметов
   * @param {String} id - id предмета
   * @returns {String} отображение предмета
   *
   */
  const getCourseView = id => {
    const course = coursesList.find(item => item.id === id)

    return course ? course.title : null
  }

  /**
   * Бэйджики с предметами
   * @type {JSX}
   */
  const coursesChips = courses.length
    ? courses.map(id => (
        <Chip
          label={ getCourseView(id) }
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
      onClick: () => history.push(`/lecturers/edit?id=${id}`),
    },
  ]

  return (
    <Portlet padding={ 10 }>
      <div className={ classes.contentWrapper }>
        <div className={ classes.content }>
          <p className={ classes.lessonTitle }>
            { [last_name, first_name, patronymic].join(' ') }
          </p>
          <span>Предметы:</span> { coursesChips }
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
    alignItems: 'center',
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  lessonTitle: {
    ...theme.custom.primaryTitle,
    marginBottom: 5,
  },
})

export default withRouter(withStyles(styles, { theme: true })(LectureItem))
