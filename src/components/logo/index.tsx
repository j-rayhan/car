import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//
import CarLogo from '../../assets/images/car-logo.jpg'

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`
const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
  `}
`
const Image = styled.div`
  width: auto;

  ${tw` h-6 md:h-9 `} img {
    border-radius: 100%;
    height: 100%;
    width: auto;
  }
`
export const Logo = () => (
  <LogoContainer>
    <Image>
      <img src={CarLogo} alt="car-logo" />
    </Image>
    <LogoText>Taxi</LogoText>
  </LogoContainer>
)
