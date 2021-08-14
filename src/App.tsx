import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import './App.css'
import { Home } from './containers/Home'

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`
function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  )
}

export default App
