import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Number } from './Number'
import * as display from '../../utils/numbers'

const NumberContainer = styled.div`display: flex;`

const addZero = value => `0${ value }`
const extractValue = value => value.slice(-2)
const correctNumbers = compose(extractValue, addZero)

const getHours = ({ index }) => {
  const date = new Date().getHours().toString()
  const getCorrectNumbers = correctNumbers(date)[index]
  return display.getNumberAsText({ number: getCorrectNumbers })
}

const getMinutes = ({ index }) => {
  const date = new Date().getMinutes().toString()
  const getCorrectNumbers = correctNumbers(date)[index]
  return display.getNumberAsText({ number: getCorrectNumbers })
}

const getCommits = async () => {
  const userData = await fetch('https://api.github.com/users/NorthernTwig/events', {
    headers: {
      Authorization: `token ${ process.env.REACT_APP_GITHUB_API_KEY }`,
      'User-Agent': 'NorthernTwig',
    },
  })
  const userDataJson = await userData.json()
  const today = new Date().getDate()
  return userDataJson
    .filter(
      ({ created_at, payload }) => today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)
    .reduce((acc, val) => acc + val, 0)
}

const enhance = compose(
  withState('firstHour', 'setFirstHour', () => getHours({ index: 0 })),
  withState('secondHour', 'setSecondHour', () => getHours({ index: 1 })),
  withState('firstMinute', 'setFirstMinute', () => getMinutes({ index: 0 })),
  withState('secondMinute', 'setSecondMinute', () => getMinutes({ index: 1 })),
  withState('commits', 'setCommits', 0),
  withState('displayCommits', 'setDisplayCommits', false),
  lifecycle({
    async componentDidMount() {
      this.props.setCommits(await getCommits())
      setInterval(async () => {
        this.props.setCommits(await getCommits())
        this.props.setDisplayCommits(!this.props.displayCommits)
      }, 5000)

      setInterval(() => {
        this.props.setFirstHour(getHours({ index: 0 }))
        this.props.setSecondHour(getHours({ index: 1 }))
        this.props.setFirstMinute(getMinutes({ index: 0 }))
        this.props.setSecondMinute(getMinutes({ index: 1 }))
      }, 2000)
    },
  }),
)

const getValue = ({ index, commits }) => {
  const reversedCommits = commits.toString().split('').reverse().join('')
  const number = reversedCommits.toString()[index] || '0'
  const numberAsText = display.getNumberAsText({ number })
  return display[numberAsText]
}

export const Clock = enhance(
  ({ firstHour, secondHour, firstMinute, secondMinute, displayCommits, commits }) => (
    <NumberContainer>
      <Number display={ displayCommits ? getValue({ index: 4, commits }) : display[firstHour] } />
      <Number display={ displayCommits ? getValue({ index: 3, commits }) : display[secondHour] } />
      <Number display={ displayCommits ? getValue({ index: 2, commits }) : display.colon } />
      <Number display={ displayCommits ? getValue({ index: 1, commits }) : display[firstMinute] } />
      <Number display={ displayCommits ? getValue({ index: 0, commits }) : display[secondMinute] } />
    </NumberContainer>
  ),
)