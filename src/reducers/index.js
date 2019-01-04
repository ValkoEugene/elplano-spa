import { combineReducers } from 'redux'
import { teachersReducer } from './teachers'
import { groupReducer } from './group'
import { userReducer } from './user'
import { mainInfoReducer } from './mainInfo'
import { lessonsReducer } from './lessons'

export const rootReducer = combineReducers({
  group: groupReducer,
  teachers: teachersReducer,
  lessons: lessonsReducer,
  user: userReducer,
  mainInfo: mainInfoReducer
})
