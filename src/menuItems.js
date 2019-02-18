import Home from './components/Home'
import Teachers from './components/Teachers'
import Lessons from './components/Lessons'
import Ratings from './components/Ratings'
import TimetableContainer from './components/Timetable/TimetableContainer'
import NewEvent from './components/NewEvent'
import Group from './components/Group'
import Auth from './components/Auth'
import TasksContainer from './components/Tasks/TasksContainer'
import MeasuresContainer from './components/Measures/MeasuresContainer'
import Attachments from './components/Attachments'

const menuItems = [
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
    sidebar: false, // Пока вынес переход в header - logo
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
    path: '/timetable/new',
    exact: true,
    sidebar: false,
    component: NewEvent,
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
    path: '/teachers',
    exact: false,
    sidebar: true,
    icon: 'contacts',
    component: Teachers,
  },
  {
    text: 'Предметы',
    path: '/lessons',
    exact: false,
    sidebar: true,
    icon: 'library_books',
    component: Lessons,
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
]

export default menuItems
