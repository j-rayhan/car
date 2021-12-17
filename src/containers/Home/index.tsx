import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { BookCard } from '../../components/bookCard'
import { MarginX } from '../../components/Margin'
import { Navbar } from '../../components/navbar'
import { AboutUs } from './aboutUs'
import { BookingSteps } from './bookingSteps'
import { TopSection } from './topSection'

const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-x-hidden
  `}
`

export const Home = () => (
  <PageContainer>
    <Navbar />
    <TopSection />
    <MarginX direction="vertical" margin="4em" />
    <BookCard />
    <MarginX direction="vertical" margin="10em" />
    <BookingSteps />
    <MarginX direction="vertical" margin="5em" />
    <AboutUs />
  </PageContainer>
)
