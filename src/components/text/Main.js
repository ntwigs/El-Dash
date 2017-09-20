import * as React from 'react'
import styled from 'styled-components'
import { Number } from './Number'
import * as display from '../../utils/letters'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 200px;
  zoom: 50%;
`

const getText = ({ displayCommits, displayTime }) => (
  <Container>
    <Number display={ displayCommits ? display.c : display.empty } />
    <Number display={ displayCommits ? display.o : display.empty } />
    <Number display={ displayCommits ? display.m : display.empty } />
    <Number display={ displayCommits ? display.m : display.t } />
    <Number display={ displayCommits ? display.i : display.i } />
    <Number display={ displayCommits ? display.t : display.m } />
    <Number display={ displayCommits ? display.s : display.e } />
  </Container>
)

export const Text = props => <Container>{getText(props)}</Container>
