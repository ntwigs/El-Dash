import * as React from 'react'
import {compose, withState, lifecycle, defaultProps} from 'recompose'
import {Container} from '../common/Container'
import {generateCharacters} from '../common/generateCharacters'

const setState = async ({props: {setCommits}}) => {
  try {
    const res = await fetch('http://localhost:3001/commits')
    const {commits} = await res.json()
    setCommits(commits)
  } catch (err) {
    setCommits('api')
  }
}

const getNumbers = ({commits, blanks, amount, ...props}) => {
  const value = commits.toString().split('')
  const asArr = Array(amount)
    .fill(0)
    .reduce((acc, v, i) => (value[i] ? [...acc, value[i]] : [v, ...acc]), [])
  const generatedCharacters = generateCharacters(asArr)
  return generatedCharacters({...props, amount})
}

const enhance = compose(
  withState('commits', 'setCommits', 0),
  defaultProps({amount: 5}),
  lifecycle({
    async componentDidMount() {
      const fiveSecondDelay = 5000
      setState(this)
      setInterval(async () => setState(this), fiveSecondDelay)
    },
  }),
)

export const Commits = enhance(props => (
  <Container {...props}>{getNumbers({...props})}</Container>
))
