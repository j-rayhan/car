import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonX } from '../button'
import { MarginX } from '../Margin'

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    bg-white
    px-2
    py-1
    md:py-2
    md:px-8
    rounded-md
  `}
`
const ItemContainer = styled.div`
  ${tw`
    flex
  `}
`
const Item = styled.span`
  ${tw`
    fill-current
    text-red-500
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`
const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
  `}
`
const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mx-2
    md:mx-5
  `}
`
export const BookCard = () => (
  <CardContainer>
    <ItemContainer>
      <Item>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </Item>
      <Name>Pick Up Date</Name>
    </ItemContainer>
    <LineSeparator />
    <ItemContainer>
      <Item>
        <FontAwesomeIcon icon={faCalendarAlt} />
      </Item>
      <Name>Return Date</Name>
    </ItemContainer>
    <MarginX direction="horizontal" margin="2em" />
    <ButtonX text="Book Your Ride" />
  </CardContainer>
)
