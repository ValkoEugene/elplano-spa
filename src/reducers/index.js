import { combineReducers } from 'redux'
import { teachersReducer } from './teachers'
import { groupReducer } from './group'
import { userReducer } from './user'
import { mainInfoReducer } from './mainInfo'
import { lessonsReducer } from './lessons'
import { tasksReducer } from './tasks'
import { routeReducer } from './route'
import { measuresReducer } from './measures'
import { eventsReducer } from './events'
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  group: groupReducer,
  teachers: teachersReducer,
  lessons: lessonsReducer,
  user: userReducer,
  tasks: tasksReducer,
  mainInfo: mainInfoReducer,
  route: routeReducer,
  measures: measuresReducer,
  events: eventsReducer,
  form: formReducer,
})
