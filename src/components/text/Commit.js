import * as React from 'react'
import styled from 'styled-components'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/letters'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: ${ ({ small }) => small ? 3 : 10 }px;
  max-width: 0px;
`

const getCommitText = ({ small }) => {
  const letters = 'commits'.split('')
  return new Array(7)
    .fill(<div />)
    .map((tag, index) => (
      <Number key={ index } small={ small } display={ display[letters[index]] } />
    ))
}

export const Commit = props => <Container small={ props } >{getCommitText(props)}</Container>
