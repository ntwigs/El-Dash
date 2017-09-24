import * as React from 'react'
import styled from 'styled-components'
import { Clock } from './information/CommitAmount'
import { Time } from './information/TimeDisplay'
import { Text } from './text/Main'

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
      <Time { ...props } />
      <Text { ...props } />
    </Row>
    <Clock { ...props } />
  </Container>
)
