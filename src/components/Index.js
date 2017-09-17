import * as React from 'react'
import styled from 'styled-components'
import { Clock } from './clock/Main'

const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); 
`

export const Index = () => (
  <PageContainer>
    <Clock />
  </PageContainer>
)
