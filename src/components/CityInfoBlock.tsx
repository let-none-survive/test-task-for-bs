import { StoreState } from '@/interfaces'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useSelector, shallowEqual } from 'react-redux'
import classNames from 'classnames'

const CityInfoBlock: FC = () => {
  const data: StoreState = useSelector(
    (state: StoreState) => state,
    shallowEqual,
  )
  console.log({ data })
  return (
    <Wrapper className='column is-flex is-flex-direction-column box'>
      <div
        className={classNames('loader-wrapper', {
          'is-active': data.isLoading,
        })}
      >
        <div className='loader is-loading' />
      </div>
      {data.error ? (
        <Text>{data.error}</Text>
      ) : (
        <>
          The weather for {data.cityName} is:
          <div className='is-full is-flex is-flex-direction-column is-centered is-justify-content-center'>
            <Text>{data.cityInfo?.main.temp}°</Text>
            <Text>{data.cityInfo?.weather[0].main}</Text>
          </div>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border: 1px solid silver;
  position: relative;
  min-height: 140px;
`

const Text = styled.div`
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default CityInfoBlock
