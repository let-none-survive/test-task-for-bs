import { StoreAction, StoreState } from '@/interfaces'
import * as actionTypes from './actionTypes'

const initialState: StoreState = {
  isLoading: false,
  cityName: '',
  cityInfo: null,
  error: 'Enter city name',
}

const reducer = (
  state: StoreState = initialState,
  action: StoreAction,
): StoreState => {
  switch (action.type) {
    case actionTypes.CITY_INFO_GET:
      return <StoreState>{
        ...state,
        cityName: action.payload,
        isLoading: true,
      }
    case actionTypes.CITY_INFO_RECEIVED_SUCCESS:
      return <StoreState>{
        ...state,
        cityInfo: action.payload,
        isLoading: false,
        error: '',
      }
    case actionTypes.CITY_INFO_RECEIVED_ERROR:
      return <StoreState>{
        ...state,
        error: action.payload,
        isLoading: false,
      }
  }
  return state
}

export default reducer
