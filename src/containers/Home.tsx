import * as React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const PageContainer = styled.div`
  ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-hidden
    `}
`

export const Home = () => (
  <PageContainer>
    <div className="mt-9">Hello home</div>
  </PageContainer>
)
