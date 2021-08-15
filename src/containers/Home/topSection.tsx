import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import BlobImg from '../../assets/images/blob.svg'
// import CarImg from '../../assets/images/car-big.png';
import CarImg from '../../assets/images/mclaren-orange-big.png'
import { ButtonX } from '../../components/button'
import { SCREENS } from '../../components/responsive'

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    pl-3
    flex
    justify-between
    lg:pl-12
    lg:pr-12
  `}
`
const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`
const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`
const Slogan = styled.div`
  ${tw`
    font-bold
    text-2xl
    text-black
    mb-4
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `}
`
const Description = styled.div`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `}
`
const BlobContainer = styled.div`
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  transform: rotate(-30deg);
  width: 20em;
  z-index: -1;

  img {
    height: auto;
    max-height: max-content;
    width: 100%;
  }

  @media (min-width: ${SCREENS.sm}) {
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
    width: 40em;
  }

  @media (min-width: ${SCREENS.lg}) {
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
    width: 50em;
  }

  @media (min-width: ${SCREENS.xl}) {
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
    width: 70em;
  }
`
const StandaloneCar = styled.div`
  height: 10em;
  position: absolute;
  right: -6em;
  top: -5em;
  width: auto;

  img: {
    height: 100%;
    max-width: fit-content;
    width: auto;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
    right: -12em;
    top: -9em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: em;
    right: -em;
    top: -em;
  }
`
export const TopSection = () => (
  <TopSectionContainer>
    <LeftContainer>
      <Slogan>Rent The Best Quality Car's With Us</Slogan>
      <Description>
        Always choose the best car from our local stores of order it remotely at the best price for
        you and get the best quality cars for as long as you like.
      </Description>
      <div className="flex">
        <ButtonX text="Book your ride" />
        <ButtonX theme="filled" text="Sell your car" />
      </div>
    </LeftContainer>
    <RightContainer>
      <BlobContainer>
        <img src={BlobImg} alt="blob" />
      </BlobContainer>
      <StandaloneCar>
        <img src={CarImg} alt="big-car-img" />
      </StandaloneCar>
    </RightContainer>
  </TopSectionContainer>
)
