import { getCityInfo } from '@/store/actionCreators'
import React, { Dispatch, FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import _debounce from 'lodash/debounce'

const CityInput: FC = () => {
  const dispatch: Dispatch<any> = useDispatch()

  const handleChange = useCallback(
    _debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(getCityInfo(e.target.value))
    }, 300),
    [dispatch],
  )

  return (
    <div className='column is-full is-flex is-justify-content-center field has-addons mb-5'>
      <div className='control'>
        <input
          className='input'
          type='text'
          placeholder='Enter city name'
          onChange={handleChange}
        />
      </div>
      <div className='control'>
        <a className='button is-primary'>search</a>
      </div>
    </div>
  )
}

export default CityInput
