import * as React from 'react'
import Draggable from 'react-draggable'
import { compose, mapProps, defaultProps } from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'

const getCommitText = ({ text, ...props }) => {
  const generatedCharacters = generateCharacters(text)
  return generatedCharacters(props)
}

const enhance = compose(
  defaultProps({ text: 'text' }),
  mapProps(props => {
    console.log('>> props', props)
    return props
  }),
  mapProps(props => ({
    ...props,
    text: props.text.toLowerCase().split(''),
    amount: props.text.length,
  }))
)

export const Text = enhance(props => (
  <Container props={props}>{getCommitText(props)}</Container>
))
