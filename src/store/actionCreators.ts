import { getWeather } from '@/api'
import { DispatchType, GetAction, StoreAction } from '@/interfaces'
import * as actionTypes from './actionTypes'

export const getCityInfo = (cityName: string) => {
  const action: StoreAction = {
    type: actionTypes.CITY_INFO_GET,
    payload: cityName,
  }
  return getWeatherData(action)
}

export function getWeatherData(action: GetAction) {
  return (dispatch: DispatchType) => {
    dispatch(action)
    getWeather(action.payload)
      .then((data) => {
        dispatch({
          type: actionTypes.CITY_INFO_RECEIVED_SUCCESS,
          payload: data,
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.CITY_INFO_RECEIVED_ERROR,
          payload: error.response.data.message,
        })
      })
  }
}
