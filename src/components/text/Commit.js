import * as React from 'react'
import styled from 'styled-components'
import { compose, mapProps } from 'recompose'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/letters'
import { Container } from '../common/Container'

const getCommitText = ({ small, text, amount }) =>
  new Array(amount)
    .fill(<div />)
    .map((tag, index) => (
      <Number key={ index } small={ small } amount={ amount } display={ display[text[index]] } />
    ))

const enhance = compose(
  mapProps(props =>
    Object.assign({}, props, {
      text: props.text.split(''),
      amount: props.text.length,
    }),
  ),
)

export const Commit = enhance(props => (
  <Container small={ props.small } amount={ props.amount }>
    {getCommitText(props)}
  </Container>
))
