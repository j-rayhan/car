import * as React from 'react'
import styled from 'styled-components'

interface MarginProps {
  margin: number | string
  // eslint-disable-next-line react/require-default-props
  direction?: 'horizontal' | 'vertical'
}

const HorizontalMargin = styled.span<MarginProps>`
  display: flex;
  min-width:
    ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`
const VerticalMargin = styled.span<MarginProps>`
  display: flex;
  min-height:
    ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}px`};
`

export const MarginX = (props: MarginProps) => {
  if (props.direction === 'horizontal') {
    return <HorizontalMargin {...props} />
  }
  return <VerticalMargin {...props} />
}
