import * as React from 'react'
import styled from 'styled-components'
import { Clock } from './clock/Main'

const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Index = () => (
  <PageContainer>
    <Clock />
  </PageContainer>
)
