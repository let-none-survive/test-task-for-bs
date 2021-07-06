import CityInfoBlock from '@/components/CityInfoBlock'
import CityInput from '@/components/CityInput'
import Layout from '@/containers/Layout'
import _debounce from 'lodash/debounce'
import React, { FC } from 'react'
import styled from 'styled-components'

const Home: FC = () => {
  return (
    <Layout>
      <Wrapper className='columns'>
        <CityInput />
        <CityInfoBlock />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  max-width: 500px;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 0 auto;
`

export default Home
