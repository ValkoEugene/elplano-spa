import { combineReducers } from 'redux'
import { teachersReducer } from './teachers.js'
import { groupReducer } from './group.js'
import { userReducer } from './user.js'

export const rootReducer = combineReducers({
  group: groupReducer,
  teachers: teachersReducer,
  user: userReducer,
})
