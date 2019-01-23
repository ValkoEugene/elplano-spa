import { loadMeasuresAPI } from '../api/index.js'

export const MEASURES_LOADING_REQUEST = 'MEASURES_LOADING_REQUEST'
export const MEASURES_LOADED_SECCUSS = 'MEASURES_LOADED_SECCUSS'
export const MEASURES_LOADED_ERROR = 'MEASURES_LOADED_ERROR'

export const loadMeasures = () => {
  return dispatch => {
    dispatch({
      type: MEASURES_LOADING_REQUEST,
    })

    loadMeasuresAPI()
      .then(({ data }) =>
        dispatch({
          type: MEASURES_LOADED_SECCUSS,
          payload: data,
        })
      )
      .catch(error =>
        dispatch({
          type: MEASURES_LOADED_ERROR,
          payload: error,
        })
      )
  }
}
