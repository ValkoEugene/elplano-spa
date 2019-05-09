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
import UpdatePassword from './components/UpdatePassword'

const pagesSettings = [
  {
    text: 'Подтверждение аккаунта',
    path: '/confirm-account',
    exact: true,
    sidebar: false,
    component: Confirm,
    layout: false,
  },
  {
    text: 'Авторизация',
    path: '/auth',
    exact: true,
    sidebar: false,
    component: Auth,
    layout: false,
  },
  {
    text: 'Новый пароль',
    path: '/update-password',
    exact: true,
    sidebar: false,
    component: UpdatePassword,
    layout: false,
  },
  {
    text: 'Главная',
    path: '/',
    exact: true,
    sidebar: true,
    icon: 'home',
    component: Home,
    layout: true,
  },
  {
    text: 'Расписание',
    path: '/timetable',
    exact: true,
    sidebar: true,
    icon: 'school',
    component: TimetableContainer,
    layout: true,
  },
  {
    text: 'Добавить event',
    path: '/timetable/event',
    exact: true,
    sidebar: false,
    component: EditEventContainer,
    layout: true,
  },
  {
    text: 'Преподаватели',
    path: '/lecturers',
    exact: true,
    sidebar: true,
    icon: 'contacts',
    component: Lecturers,
    layout: true,
  },
  {
    text: 'Добавить преподавателя',
    path: '/lecturers/edit',
    exact: true,
    sidebar: false,
    component: LecturerEdit,
    layout: true,
  },
  {
    text: 'Предметы',
    path: '/lessons',
    exact: true,
    sidebar: true,
    icon: 'library_books',
    component: Lessons,
    layout: true,
  },
  {
    text: 'Редактироавние предмета',
    path: '/lessons/edit',
    exact: false,
    sidebar: false,
    component: LessonsEdit,
    layout: true,
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
    layout: true,
  },
  {
    text: 'Профиль',
    path: '/profile',
    exact: false,
    sidebar: false,
    component: ProfileEdit,
    layout: true,
  },
  {
    text: 'Задания',
    path: '/tasks',
    exact: false,
    sidebar: true,
    icon: 'work',
    component: TasksContainer,
    layout: true,
  },
  {
    text: 'Мероприятия',
    path: '/measures',
    exact: false,
    sidebar: true,
    icon: 'event_note',
    component: MeasuresContainer,
    layout: true,
  },
  {
    text: 'Оценки',
    path: '/ratings',
    exact: false,
    sidebar: true,
    icon: 'star_half',
    component: Ratings,
    layout: true,
  },
  {
    text: 'Вложения',
    path: '/attachments',
    exact: false,
    sidebar: true,
    icon: 'unarchive',
    component: Attachments,
    layout: true,
  },
]

export default pagesSettings
