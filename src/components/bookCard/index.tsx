/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Calendar from 'react-calendar'

import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonX } from '../button'
import { MarginX } from '../Margin'
import 'react-calendar/dist/Calendar.css'
import { SCREENS } from '../responsive'

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
    relative
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
    text-gray-500
    text-xs
    md:text-sm
    cursor-pointer
  `}
`
const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    select-none
    fill-current
    text-xs 
    md:text-base 
    ml-1
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
const CalendarDate = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;
  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `}
  @media (min-width: ${SCREENS.md}) {
    top: 3.5em;
    left: -2em;
  }
` as any
export const BookCard = () => {
  const [startDate, setStartDate] = React.useState(new Date())
  const [showStartDate, setStartDateCalanderShow] = React.useState(false)
  const [returnDate, setReturnDate] = React.useState(new Date())
  const [showReturnDate, setReturnDateCalanderShow] = React.useState(false)
  return (
    <CardContainer>
      <ItemContainer>
        <Item>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Item>
        <Name
          onClick={() => {
            setStartDateCalanderShow(!showStartDate)
            setReturnDateCalanderShow(false)
          }}
        >
          Pick Up Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon icon={showStartDate ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {showStartDate && (
          <CalendarDate value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Item>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Item>
        <Name
          onClick={() => {
            setReturnDateCalanderShow(!showReturnDate)
            setStartDateCalanderShow(false)
          }}
        >
          Return Date
        </Name>
        <SmallIcon>
          <FontAwesomeIcon icon={showReturnDate ? faCaretUp : faCaretDown} />
        </SmallIcon>
        {showReturnDate && (
          <CalendarDate offset value={returnDate} onChange={setReturnDate} />
        )}
      </ItemContainer>
      <MarginX direction="horizontal" margin="2em" />
      <ButtonX text="Book Your Ride" />
    </CardContainer>
  )
}
