import * as React from 'react'
import styled from 'styled-components'
import { Number } from './Number'
import * as display from '../../utils/letters'

const Container = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = () =>
  <Container>
    <Number display={ display.a } />
    <Number display={ display.a } />
    <Number display={ display.a } />
    <Number display={ display.a } />
    <Number display={ display.a } />
  </Container>
