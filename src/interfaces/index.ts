import { ApiResponseDTO } from '@/dto'

export type StoreState = {
  cityName: string
  cityInfo: CityInfo | null
  isLoading: boolean
  error: string
}

export type CityInfo = {
  main: ApiResponseDTO['main']
  weather: ApiResponseDTO['weather']
}

type Action = {
  type: string
}

export type GetAction = Action & {
  payload: string
}

type ReceivedSuccessAction = Action & {
  payload: StoreState['cityInfo']
}

type ReceivedErrorAction = Action & {
  payload: StoreState['error']
}

export type StoreAction =
  | GetAction
  | ReceivedSuccessAction
  | ReceivedErrorAction

export type DispatchType = (args: StoreAction) => StoreAction
