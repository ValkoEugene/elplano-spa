import { SET_CURRENT_ROUTE } from '../actions/RouteActions'

const initialState = {
  currentRout: {},
}

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return { currentRout: action.payload }
    default:
      return state
  }
}
