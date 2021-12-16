import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faCarAlt,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons'

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col 
    items-center 
    py-3 
    lg:py-6
  `}
`

const Title = styled.h2`
  ${tw`
    text-xl 
    lg:text-4xl 
    text-black 
    font-extrabold
  `}
`
const StepsContainer = styled.div`
  ${tw`
    flex
    flex-wrap 
    justify-evenly 
    mt-7 
    lg:mt-16 
  `}
`

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center 
    m-3 
    md:w-96
    transition-colors 
    hover:text-red-500  
  `}
`
const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center 
    items-center 
    rounded-lg
    p-6 
  `}
`
const StepTitle = styled.h4`
  ${tw`
    text-black
    text-lg
    p-6 
    font-semibold
    mt-4
  `}
`
const StepDescription = styled.h4`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center 
    text-gray-600
  `}
`
const StepIcon = styled.h4`
  ${tw`
    text-red-500
    text-3xl
  `}
`
export function BookingSteps() {
  // const [isLoading, setLoading] = React.useState(false);
  return (
    <Container>
      <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>Fined the nearest car point</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pic-Up a date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car.{' '}
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Book A Car</StepTitle>
          <StepDescription>
            Book a nice car with a signal click.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  )
}
