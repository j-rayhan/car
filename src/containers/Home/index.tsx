import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { BookCard } from '../../components/bookCard'
import { MarginX } from '../../components/Margin'
import { Navbar } from '../../components/navbar'
import { BookingSteps } from './bookingSteps'
import { TopSection } from './topSection'

const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
    `}
`

export const Home = () => (
  <PageContainer>
    <Navbar />
    <TopSection />
    <MarginX direction="vertical" margin="4em" />
    <BookCard />
    <MarginX direction="vertical" margin="4em" />
    <BookingSteps />
  </PageContainer>
)
