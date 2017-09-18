import * as React from 'react'
import styled from 'styled-components'
import { compose, withState } from 'recompose'
import cheerio from 'cheerio'
import request from 'request'

const Container = styled.div`
  width: 50%;
  background-color: red;
`

const getCommits = () => 0

const enhance = compose(
  withState('commits', 'setCommits', () => {
    return getCommits()
  }),
)

export const Commit = enhance(({ commits }) => (
  <Container>
    <h1>{commits}</h1>
  </Container>
))
