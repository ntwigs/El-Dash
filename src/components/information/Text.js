import * as React from 'react'
import { compose, mapProps, defaultProps } from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'

const getCommitText = ({ text, ...props }) => {
  const generatedCharacters = generateCharacters(text)
  return generatedCharacters(props)
}

const enhance = compose(
  defaultProps({ text: 'text' }),
  mapProps(props =>
    Object.assign({}, props, {
      text: props.text.toLowerCase().split(''),
      amount: props.text.length,
    }),
  ),
)

export const Text = enhance(({ small, amount, animation, ...rest }) => (
  <Container small={ small } amount={ amount } animation={ animation }>
    {getCommitText({ ...rest, small, amount, animation })}
  </Container>
))
