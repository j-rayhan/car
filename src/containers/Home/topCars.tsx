import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Car } from '../../components/cars'
import { ICar } from '../../typings/car'
import { Title } from './homeStyle'
import carImg from '../../assets/images/pexels-mike-170811.jpg'

const TopCarsContainer = styled.div`
  ${tw`
  flex 
  flex-col 
  items-center 
  justify-center 
  w-full 
  max-w-screen-lg 
  px-4 
  md:px-0 mb-10
  `}
`
const CarsContainer = styled.div`
  ${tw`
  flex 
  flex-wrap 
  justify-center 
  w-full 
  mt-7
  md:mt-10
  `}
`
export function TopCars() {
  const car: ICar = {
    name: 'BMW',
    thumbnailSrc: carImg,
    dailyPrice: 100,
    monthlyPrice: 3000,
    gas: '12',
    gearType: 'CNG',
    mileage: '100cc',
  }
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Car {...car} />
        <Car {...car} />
        <Car {...car} />
      </CarsContainer>
    </TopCarsContainer>
  )
}
