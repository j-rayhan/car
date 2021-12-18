import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

interface ButtonProps {
  // eslint-disable-next-line react/require-default-props
  theme?: 'filled' | 'outlined'
  text: string
  className?: string
}
// px-5 py-3
const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    m-1
    text-xs
    text-white
    font-semibold
    outline-none
    rounded-md
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
  `}
`

const OutlinedButton = styled(BaseButton)`
  ${tw`
    bg-red-500
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `}
`
const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `}
`

export const ButtonX = ({ theme, text, className }: ButtonProps) => {
  if (theme === 'filled') {
    return <FilledButton className={className}>{text}</FilledButton>
  }
  return <OutlinedButton className={className}>{text}</OutlinedButton>
}

ButtonX.defaultProps = {
  className: '',
}
