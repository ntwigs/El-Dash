import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'

const Container = styled.div`
  width: 50%;
  background-color: red;
`

const Commits = props => <h1>{props.commits}</h1>

const getCommits = async () => {
  const userData = await fetch('https://api.github.com/users/NorthernTwig/events', {
    Authorization: `token ${ process.env.REACT_APP_GITHUB_API_KEY }`,
  })
  const userDataJson = await userData.json()
  const today = new Date().getDate()
  const commits = userDataJson
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)

  return commits.length > 0 ? commits[0] : 0
}

const enhance = compose(
  withState('commits', 'setCommits', 0),
  lifecycle({
    componentDidMount() {
      setInterval(async () => {
        this.props.setCommits(await getCommits())
      }, 10000)
    },
  }),
)

export const Commit = enhance(({ commits }) => (
  <Container>
    <Commits commits={ commits } />
  </Container>
))
