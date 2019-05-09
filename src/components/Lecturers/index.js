import React from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import AddNew from '../UI-core/AddNew'
import useLecturersIndex from '../../hooks/useLecturersIndex'
import useCoursesIndex from '../../hooks/useCoursesIndex'
import LectureItem from './LectureItem'
import ApiWrapper from '../UI-core/ApiWrapper'

function Lecturers({ classes }) {
  const { loadingLecturers, errorLecturers, lecturers } = useLecturersIndex()

  const { loadingCourses, errorCourses, courses } = useCoursesIndex()

  /**
   * Флаг наличия препродавателей
   * @type {Boolean}
   */
  const haveCourses = Boolean(lecturers.length)

  /**
   * Список предметов
   * @type {JSX}
   */
  const lecturersList = lecturers.map(lecture => (
    <div className={ classes.item }>
      <LectureItem { ...lecture } coursesList={ courses } key={ lecture.id } />
    </div>
  ))

  /**
   * Ошибка при загрузке данных
   * @type {Error | Null}
   */
  const error = errorLecturers || errorCourses

  /**
   * Флаг загрузки данных
   * @type {Boolean}
   */
  const loading = loadingLecturers || loadingCourses

  return (
    <ApiWrapper
      loading={ loading }
      error={ error }
      haveData={ haveCourses }
      emptyText="Список препродавателей пуст"
    >
      <>
        <div className={ classes.wrapper }>{ lecturersList }</div>
        <AddNew addLink="/lecturers/edit" />
      </>
    </ApiWrapper>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '50%',
    },
    flexGrow: 1,
  },
})

export default withRouter(withStyles(styles, { theme: true })(Lecturers))
