import Home from './components/Home.js'
import Teachers from './components/Teachers.js'
import Lessons from './components/Lessons.js'
import Ratings from './components/Ratings.js'
import Timetable from './components/Timetable.js'
import Auth from './components/Auth.js'

const menuItems = [
  {
    text: 'Главная',
    path: '/',
    exact: true,
    sidebar: true,
    component: Home
  },
  {
    text: 'Преподаватели',
    path: '/teachers',
    exact: false,
    sidebar: true,
    component: Teachers
  },
  {
    text: 'Предметы',
    path: '/lessons',
    exact: false,
    sidebar: true,
    component: Lessons
  },
  {
    text: 'Оценки',
    path: '/ratings',
    exact: false,
    sidebar: true,
    component: Ratings
  },
  {
    text: 'Расписание',
    path: '/timetable',
    exact: false,
    sidebar: true,
    component: Timetable
  },
  {
    text: 'Авторизация',
    path: '/auth',
    exact: false,
    sidebar: false,
    component: Auth
  },
]

export default menuItems 