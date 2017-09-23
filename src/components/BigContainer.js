import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Clock } from './information/Main'
import { Text } from './text/Main'

const Container = styled.div`
  width: 600px;
`

export const BigContainer = props => (
  <Container>
    <Text { ...props } />
    <Clock { ...props } />
  </Container>
)
