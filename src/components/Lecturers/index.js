import React from 'react'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import Loader from '../Loader'
import Alert from '../UI-core/Alert'
import AddNew from '../UI-core/AddNew'
import useLecturersApi from '../../hooks/useLecturersApi'
import useCoursesApi from '../../hooks/useCoursesApi'
import LectureItem from './LectureItem'

function Lecturers({ classes }) {
  /** */
  const { loadingLecturers, errorLecturers, lecturers } = useLecturersApi()

  const { loadingCourses, errorCourses, courses } = useCoursesApi()

  /**
   * Флаг наличия препродавателей
   * @type {Boolean}
   */
  const haveCourses = Boolean(lecturers.length)

  /**
   * Сообщение о ошибки
   * @type {JSX}
   */
  const errorAlert = (
    <Alert color="error">{ errorLecturers || errorCourses }</Alert>
  )

  /**
   * Сообщение об отсутствие препродавателей
   * @type {JSX}
   */
  const emptyAlert = <Alert color="warning">Список препродавателей пуст</Alert>

  /**
   * Список предметов
   * @type {JSX}
   */
  const lecturersList = lecturers.map(lecture => (
    <div className={ classes.item }>
      <LectureItem { ...lecture } coursesList={ courses } key={ lecture.id } />
    </div>
  ))

  return (
    <>
      { (() => {
        if (errorLecturers || errorCourses) {
          return errorAlert
        } else if (loadingLecturers || loadingCourses) {
          return <Loader />
        } else {
          return (
            <>
              { !haveCourses ? (
                emptyAlert
              ) : (
                <div className={ classes.wrapper }>{ lecturersList }</div>
              ) }
              <AddNew addLink="/lecturers/edit" />
            </>
          )
        }
      })() }
    </>
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
