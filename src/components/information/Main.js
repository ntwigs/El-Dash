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
  const number = commits.toString()[index] || '0'
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

const getNumbers = ({ commits }) =>
  new Array(5)
    .fill(<div />)
    .map((tag, index) => <Number key={ index } display={ getValue({ index, commits }) } />)
    .reverse()

export const Clock = enhance(({ commits }) => (
  <NumberContainer>{getNumbers({ commits })}</NumberContainer>
))
