import * as React from 'react'
import styled from 'styled-components'
import { Number } from './Number'
import * as display from '../../utils/letters'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.5);
`

const getText = ({ displayCommits, displayTime }) => (
  <Container>
    <Number display={ displayCommits ? display.c : display.a } />
    <Number display={ displayCommits ? display.o : display.a } />
    <Number display={ displayCommits ? display.m : display.a } />
    <Number display={ displayCommits ? display.m : display.a } />
    <Number display={ displayCommits ? display.i : display.a } />
    <Number display={ displayCommits ? display.t : display.a } />
    <Number display={ displayCommits ? display.s : display.a } />
  </Container>
)

export const Text = props => <Container>{getText(props)}</Container>
