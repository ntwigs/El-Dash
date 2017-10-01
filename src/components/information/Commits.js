import * as React from 'react'
import { compose, withState, lifecycle, defaultProps } from 'recompose'
import { getCommits } from '../../http/commits'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'

const setState = async ({ props }) => {
  const commits = await getCommits()
  props.setCommits(commits)
}

const getNumbers = ({ commits, blanks, ...props }) => {
  const value = commits.toString().split('')
  const asArr = new Array(props.amount)
    .fill(0)
    .reduce((acc, v, i) => (value[i] ? [...acc, value[i]] : [v, ...acc]), [])
  const generatedCharacters = generateCharacters(asArr)
  return generatedCharacters(props)
}

const enhance = compose(
  withState('commits', 'setCommits', 0),
  defaultProps({ amount: 5 }),
  lifecycle({
    async componentDidMount() {
      const fiveSecondDelay = 5000
      setState(this)
      setInterval(async () => setState(this), fiveSecondDelay)
    },
  }),
)

export const Commits = enhance(({ amount, small, ...props }) => (
  <Container { ...{ small, amount } }>{getNumbers({ ...{ ...props, amount, small } })}</Container>
))
