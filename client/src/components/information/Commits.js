import * as React from 'react'
import { compose, withState, lifecycle, defaultProps } from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'
import githubJson from '../../../data/github.json'

const setState = async ({ props }) => {
  props.setCommits(githubJson)
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

export const Commits = enhance(props => (
  <Container { ...props }>{getNumbers({ ...props })}</Container>
))
