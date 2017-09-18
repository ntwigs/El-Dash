import * as React from 'react'
import styled from 'styled-components'
import { Commit } from './commit/Main'

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    transform: scale(0.25);
  }
`

export const SmallContainer = () => (
  <Container>
    <Commit />
  </Container>
)
