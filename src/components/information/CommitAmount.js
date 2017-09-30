import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle, defaultProps } from 'recompose'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/numbers'
import { getCommits } from '../../http/commits'
import { Container } from '../common/Container'

const getValue = ({ index, commits }) => {
  const number = commits.toString()[index] || '0'
  const numberAsText = display.getNumberAsText({ number })
  return display[numberAsText]
}

const getBlanks = (commits, amount) => () => {
  const commitLength = commits.toString().length
  return amount - commitLength
}

const setState = async ({ props }) => {
  const commits = await getCommits()
  props.setBlanks(getBlanks(commits, props.amount))
  props.setCommits(commits)
}

const enhance = compose(
  withState('commits', 'setCommits', 0),
  withState('blanks', 'setBlanks', 0),
  defaultProps({ amount: 5 }),
  lifecycle({
    async componentDidMount() {
      const fiveSecondDelay = 5000
      setState(this)
      setInterval(async () => setState(this), fiveSecondDelay)
    },
  }),
)

const getNumbers = ({ commits, blanks, amount }) => new Array(amount)
  .fill(<div />)
  .map((tag, index) => (
    <Number key={ index } display={ getValue({ index: index - blanks, commits }) } />
  ))

export const Clock = enhance(props => (
  <Container small={ props.small } amount={ props.amount }>
    {getNumbers(props)}
  </Container>
))
