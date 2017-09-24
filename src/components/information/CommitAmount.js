import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle, defaultProps } from 'recompose'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/numbers'
import { getCommits } from '../../http/commits'

const NumberContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`

const getValue = ({ index, commits }) => {
  const number = commits.toString()[index] || '0'
  const numberAsText = display.getNumberAsText({ number })
  return display[numberAsText]
}

const getBlanks = (commits, amountOfNumbers) => () => {
  const commitLength = commits.toString().length
  return amountOfNumbers - commitLength
}

const setState = async ({ props }) => {
  const commits = await getCommits()
  props.setBlanks(getBlanks(commits, props.amountOfNumbers))
  props.setCommits(commits)
}

const enhance = compose(
  withState('commits', 'setCommits', 0),
  withState('blanks', 'setBlanks', 0),
  defaultProps({ amountOfNumbers: 5 }),
  lifecycle({
    async componentDidMount() {
      const fiveSecondDelay = 5000;
      setState(this)
      setInterval(async () => setState(this), fiveSecondDelay)
    },
  }),
)

const getNumbers = ({ commits, blanks, amountOfNumbers }) =>
  new Array(amountOfNumbers)
    .fill(<div />)
    .map((tag, index) => (
      <Number
        key={ index }
        display={ getValue({ index: index - blanks, commits }) }
      />
    ))

export const Clock = enhance(({ commits, blanks, amountOfNumbers }) => (
  <NumberContainer>{getNumbers({ commits, blanks, amountOfNumbers })}</NumberContainer>
))
