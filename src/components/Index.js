import * as React from 'react'
import styled from 'styled-components'
import { colors, layout } from '../config'

const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${ colors.background };
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
`

export const Index = () => (
  <PageContainer>
    { layout() }
  </PageContainer>
)
