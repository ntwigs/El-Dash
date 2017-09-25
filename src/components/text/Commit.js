import * as React from 'react'
import styled from 'styled-components'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/letters'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 143px;
  zoom: 50%;
`

const getCommitText = () => {
  const letters = 'commits'.split('')
  return new Array(7)
    .fill(<div />)
    .map((tag, index) => <Number key={ index } display={ display[letters[index]] } />)
}

const getText = () => <Container>{getCommitText()}</Container>

export const Commit = props => <Container>{getText(props)}</Container>
