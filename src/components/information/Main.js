import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Number } from '../common/Number'
import * as display from '../../utils/numbers'
import { getCommits } from '../../http/commits'

const NumberContainer = styled.div`
  display: flex;
  display: flex;
  width: 100%;
  justify-content: center;
`

const getValue = ({ index, commits }) => {
  const reversedCommits = commits
    .toString()
    .split('')
    .reverse()
    .join('')
  const number = reversedCommits.toString()[index] || '0'
  const numberAsText = display.getNumberAsText({ number })
  return display[numberAsText]
}

const enhance = compose(
  withState('commits', 'setCommits', 0),
  lifecycle({
    async componentDidMount() {
      this.props.setCommits(await getCommits())
      setInterval(async () => {
        this.props.setCommits(await getCommits())
      }, 10000)
    },
  }),
)

export const Clock = enhance(({ commits }) => (
  <NumberContainer>
    <Number display={ getValue({ index: 4, commits }) } />
    <Number display={ getValue({ index: 3, commits }) } />
    <Number display={ getValue({ index: 2, commits }) } />
    <Number display={ getValue({ index: 1, commits }) } />
    <Number display={ getValue({ index: 0, commits }) } />
  </NumberContainer>
))
