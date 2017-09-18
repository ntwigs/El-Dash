import * as React from 'react'
import styled from 'styled-components'
import { BigContainer } from './BigContainer'
import { SmallContainer } from './SmallContainer'
import { background } from '../utils/colors'

const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: ${background};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
`

export const Index = () => (
  <PageContainer>
    <BigContainer />
    <SmallContainer />
  </PageContainer>
)
