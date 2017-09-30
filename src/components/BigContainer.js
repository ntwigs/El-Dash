import * as React from 'react'
import styled from 'styled-components'
import { Clock } from './information/CommitAmount'
import { Time } from './information/TimeDisplay'
import { Commit } from './text/Commit'

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`

export const BigContainer = props => (
  <Container>
    <Time small />
    <Commit small />
    <Clock big />
  </Container>
)
