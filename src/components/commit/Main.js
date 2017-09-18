import * as React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'

const Container = styled.div`
  width: 50%;
  background-color: red;
`

const getCommits = async () => {
  const userData = await fetch(`https://api.github.com/users/NorthernTwig/events`, {
    Authorization: `token ${ process.env.REACT_APP_GITHUB_API_KEY }`,
  })

  const userDataJson = await userData.json()

  const today = new Date().getDate()
  return userDataJson
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)

  return <p>{test}</p>
}

const enhance = compose(
  withState('commits', 'setCommits', async () => getCommits()),
)

export const Commit = enhance(({ commits }) => (
  <Container>
    {commits}
  </Container>
))
