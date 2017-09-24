import * as React from 'react'
import styled from 'styled-components'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/letters'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 200px;
  zoom: 50%;
`

const getText = () => (
  <Container>
    <Number display={ display.c } />
    <Number display={ display.o } />
    <Number display={ display.m } />
    <Number display={ display.m } />
    <Number display={ display.i } />
    <Number display={ display.t } />
    <Number display={ display.s } />
  </Container>
)

export const Text = props => <Container>{getText(props)}</Container>
