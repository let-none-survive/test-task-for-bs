import { ApiResponseDTO } from '@/dto'
import { CityInfo, StoreState } from '@/interfaces'
import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeather = (cityName: string): Promise<CityInfo> => {
  return axios(BASE_URL, {
    params: {
      q: cityName,
      appid: 'e403a5a5f562cc6e20d38fb329ee4738',
      units: 'metric',
    },
  }).then(
    (res: AxiosResponse<ApiResponseDTO>): CityInfo => {
      return {
        main: res.data.main,
        weather: res.data.weather,
      }
    },
  )
}
