import Home from './components/Home.js'
import Teachers from './components/Teachers.js'
import Lessons from './components/Lessons.js'
import Ratings from './components/Ratings.js'
import Timetable from './components/Timetable.js'
import Group from './components/Group.js'
import Auth from './components/Auth.js'
import Tasks from './components/Tasks.js'
import Measures from './components/Measures.js'
import Attachments from './components/Attachments.js'

const menuItems = [
  {
    text: 'Авторизация',
    path: '/auth',
    exact: false,
    sidebar: false,
    component: Auth
  },
  {
    text: 'Главная',
    path: '/',
    exact: true,
    sidebar: false, // Пока вынес переход в header - logo
    component: Home
  },
  {
    text: 'Расписание',
    path: '/timetable',
    exact: false,
    sidebar: true,
    icon: 'school',
    component: Timetable
  },
  {
    text: 'Задания',
    path: '/tasks',
    exact: false,
    sidebar: true,
    icon: 'work',
    component: Tasks
  },
  {
    text: 'Мероприятия',
    path: '/measures',
    exact: false,
    sidebar: true,
    icon: 'event_note',
    component: Measures
  },
  {
    text: 'Преподаватели',
    path: '/teachers',
    exact: false,
    sidebar: true,
    icon: 'contacts',
    component: Teachers
  },
  {
    text: 'Предметы',
    path: '/lessons',
    exact: false,
    sidebar: true,
    icon: 'library_books',
    component: Lessons
  },
  {
    text: 'Оценки',
    path: '/ratings',
    exact: false,
    sidebar: true,
    icon: 'star_half',
    component: Ratings
  },
  {
    text: 'Вложения',
    path: '/attachments',
    exact: false,
    sidebar: true,
    icon: 'unarchive',
    component: Attachments
  },
  {
    text: 'Группа',
    path: '/group',
    exact: false,
    sidebar: true,
    icon: 'people',
    component: Group
  },
]

export default menuItems 