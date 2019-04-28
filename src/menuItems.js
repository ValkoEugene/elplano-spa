import Confirm from './components/Confirm'
import Home from './components/Home'
import Lecturers from './components/Lecturers'
import LecturerEdit from './components/Lecturers/LectureEdit'
import Lessons from './components/Lessons'
import LessonsEdit from './components/Lessons/LessonEdit'
import Ratings from './components/Ratings'
import TimetableContainer from './components/Timetable/TimetableContainer'
import EditEventContainer from './components/Timetable/EditEvent/EditEventContainer'
import Group from './components/Group'
import GroupInfo from './components/GroupInfo'
import Auth from './components/Auth'
import TasksContainer from './components/Tasks/TasksContainer'
import MeasuresContainer from './components/Measures/MeasuresContainer'
import Attachments from './components/Attachments'
import ProfileEdit from './components/ProfileEdit'

const menuItems = [
  {
    text: 'Подтверждение аккаунта',
    path: '/confirm-account',
    exact: true,
    sidebar: false,
    component: Confirm,
  },
  {
    text: 'Авторизация',
    path: '/auth',
    exact: false,
    sidebar: false,
    component: Auth,
  },
  {
    text: 'Главная',
    path: '/',
    exact: true,
    sidebar: true,
    icon: 'home',
    component: Home,
  },
  {
    text: 'Расписание',
    path: '/timetable',
    exact: true,
    sidebar: true,
    icon: 'school',
    component: TimetableContainer,
  },
  {
    text: 'Добавить event',
    path: '/timetable/event',
    exact: true,
    sidebar: false,
    component: EditEventContainer,
  },
  {
    text: 'Задания',
    path: '/tasks',
    exact: false,
    sidebar: true,
    icon: 'work',
    component: TasksContainer,
  },
  {
    text: 'Мероприятия',
    path: '/measures',
    exact: false,
    sidebar: true,
    icon: 'event_note',
    component: MeasuresContainer,
  },
  {
    text: 'Преподаватели',
    path: '/lecturers',
    exact: true,
    sidebar: true,
    icon: 'contacts',
    component: Lecturers,
  },
  {
    text: 'Добавить преподавателя',
    path: '/lecturers/edit',
    exact: true,
    sidebar: false,
    component: LecturerEdit,
  },
  {
    text: 'Предметы',
    path: '/lessons',
    exact: true,
    sidebar: true,
    icon: 'library_books',
    component: Lessons,
  },
  {
    text: 'Редактироавние предмета',
    path: '/lessons/edit',
    exact: false,
    sidebar: false,
    component: LessonsEdit,
  },
  {
    text: 'Оценки',
    path: '/ratings',
    exact: false,
    sidebar: true,
    icon: 'star_half',
    component: Ratings,
  },
  {
    text: 'Вложения',
    path: '/attachments',
    exact: false,
    sidebar: true,
    icon: 'unarchive',
    component: Attachments,
  },
  {
    text: 'Группа',
    path: '/group',
    exact: false,
    sidebar: true,
    icon: 'people',
    component: Group,
  },
  {
    text: 'Редактирование группы',
    path: '/group-info',
    exact: false,
    sidebar: false,
    component: GroupInfo,
  },
  {
    text: 'Профиль',
    path: '/profile',
    exact: false,
    sidebar: false,
    component: ProfileEdit,
  },
]

export default menuItems
