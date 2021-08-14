import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Navbar } from '../components/navbar'

const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-hidden
    `}
`

export const Home = () => (
  <PageContainer>
    <Navbar />
    <div className="mt-9">Hello home</div>
  </PageContainer>
)
