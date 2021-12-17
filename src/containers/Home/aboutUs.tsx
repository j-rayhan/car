import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREENS } from '../../components/responsive'
import JeepCar from '../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
  ${tw`w-full flex flex-wrap items-center justify-center px-7 py-4 md:py-0 bg-white`}
`
const CarContainer = styled.div`
  height: 15em;
  margin-left: -50;

  ${tw`w-auto`}

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }

  @media (min-width: ${SCREENS['2xl']}) {
    height: 35em;
    margin-left: 0px;
  }
`
const InfoContainer = styled.div`
  ${tw`md:w-1/2 flex flex-col md:ml-6 2xl:ml-16`}
`
const Title = styled.h1`
  ${tw`text-black text-2xl md:text-5xl font-extrabold md:font-black md:leading-normal`}
`
const InfoText = styled.p`
  ${tw`max-w-2xl text-sm md:text-base mt-4 font-normal text-gray-500`}
`
export function AboutUs() {
  // const [isLoading, setLoading] = React.useState(false);
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepCar} alt="" />
      </CarContainer>
      <InfoContainer>
        <Title>Fill The Best experience With our Rental Car</Title>
        <InfoText>
          This is tes desctiption asdf jsdlkfjl sdjfds f dsfjds jfkldjsfj sdklfj
          ldksjf jsdkfl sd jfk jsadfj dk jfk djfkjd kjfakld jkldj f The quick
          brown fox jump over the lazy dog. The quick brown fox jump over the
          lazy dog. The quick brown fox jump over the lazy dog. This is tes
          desctiption asdf jsdlkfjl sdjfds f dsfjds jfkldjsfj sdklfj ldksjf
          jsdkfl sd jfk jsadfj dk jfk djfkjd kjfakld jkldj f The quick brown fox
          jump over the lazy dog. The quick brown fox jump over the lazy dog.
          The quick brown fox jump over the lazy dog. This is tes desctiption
          asdf jsdlkfjl sdjfds f dsfjds jfkldjsfj sdklfj ldksjf jsdkfl sd jfk
          jsadfj dk jfk djfkjd kjfakld jkldj f The quick brown fox jump over the
          lazy dog. The quick brown fox jump over the lazy dog. The quick brown
          fox jump over the lazy dog. The quick brown fox jump over the lazy
          dog. The quick brown fox jump over the lazy dog. The quick brown fox
          jump over the lazy dog.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  )
}
