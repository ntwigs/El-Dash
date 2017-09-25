import * as React from 'react'
import styled from 'styled-components'
import { Clock } from './information/CommitAmount'
import { Time } from './information/TimeDisplay'
import { Commit } from './text/Commit'

const Container = styled.div`
  width: 600px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BigContainer = props => (
  <Container>
    <Row>
      <Time />
      <Commit />
    </Row>
    <Clock />
  </Container>
)
