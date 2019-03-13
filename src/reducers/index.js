import { combineReducers } from 'redux'
import { teachersReducer } from './teachers'
import { teacherReducer } from './teacher'
import { groupReducer } from './group'
import { userReducer } from './user'
import { confirmReducer } from './confirm'
import { mainInfoReducer } from './mainInfo'
import { lessonsReducer } from './lessons'
import { tasksReducer } from './tasks'
import { routeReducer } from './route'
import { measuresReducer } from './measures'
import { eventsReducer } from './events'
import { eventReducer } from './event'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  group: groupReducer,
  teachers: teachersReducer,
  teacher: teacherReducer,
  lessons: lessonsReducer,
  user: userReducer,
  tasks: tasksReducer,
  mainInfo: mainInfoReducer,
  route: routeReducer,
  measures: measuresReducer,
  events: eventsReducer,
  event: eventReducer,
  form: formReducer,
  confirm: confirmReducer,
})
