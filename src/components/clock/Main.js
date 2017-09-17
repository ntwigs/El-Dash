import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import { Number } from './Number'
import * as display from './numbers'

const NumberContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const getNumberAsText = ({ number }) => {
  switch (number) {
    case '0': {
      return 'zero'
    }
    case '1': {
      return 'one'
    }
    case '2': {
      return 'two'
    }
    case '3': {
      return 'three'
    }
    case '4': {
      return 'four'
    }
    case '5': {
      return 'five'
    }
    case '6': {
      return 'six'
    }
    case '7': {
      return 'seven'
    }
    case '8': {
      return 'eight'
    }
    case '9': {
      return 'nine'
    }
    default:
      throw new Error('Something went terriblt wrong')
  }
}

const enhance = compose(
  withState('firstHour', 'setFirstHour', props => {
    const hourOne = new Date().getHours().toString()[0]
    return getNumberAsText({ number: hourOne })
  }),
  withState('secondHour', 'setSecondHour', props => {
    const hourTwo = new Date().getHours().toString()[1]
    return getNumberAsText({ number: hourTwo })
  }),
  withState('firstMinute', 'setFirstMinute', props => {
    const minuteOne = new Date().getMinutes().toString()[0]
    return getNumberAsText({ number: minuteOne })
  }),
  withState('secondMinute', 'setSecondMinute', props => {
    const minuteTwo = new Date().getMinutes().toString()[1]
    return getNumberAsText({ number: minuteTwo })
  }),
  lifecycle({
    componenDidMount() {
      setInterval(() => {
        this.props.setFirstHour()
        this.props.setSecondHour()
        this.props.setFirstMinute()
        this.props.setSecondMinute()
      }, 1000)
    },
  }),
)
export const Clock = enhance(({ firstHour, secondHour, firstMinute, secondMinute }) => (
  <NumberContainer>
    <Number display={display[firstHour]} />
    <Number display={display[secondHour]} />
    <Number display={display[firstMinute]} />
    <Number display={display[secondMinute]} />
  </NumberContainer>
))
