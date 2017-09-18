import * as React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

const Container = styled.div`
  width: 50%;
  background-color: red;
`

const getCommits = async () => {
  const userData = await fetch('https://api.github.com/users/NorthernTwig/events', {
    Authorization: `token ${ process.env.REACT_APP_GITHUB_API_KEY }`,
  })
  const userDataJson = await userData.json()
  const today = new Date().getDate()
  return userDataJson
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)
}

const Commits = props => (
  <h1>{ props.commits }</h1>
)

const WithExists = Component => props => (
  !props.commits ? <Component { ...props } /> : <h1>I AM LOADING BRE</h1>
)

const CommitsWithExists = WithExists(Commits)

const enhance = compose(withState('commits', 'setCommits', getCommits()))

export const Commit = enhance(({ commits }) => (
  <Container>
    <CommitsWithExists commits={ commits } />
  </Container>
))
