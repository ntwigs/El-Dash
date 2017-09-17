import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Number } from './Number'
import * as display from './numbers'

const NumberContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const getHours = ({ index }) => {
  const timeNumber = `0${new Date().getHours().toString()}`
  const extractedNumber = timeNumber.slice(-2)[index]
  return display.getNumberAsText({ number: extractedNumber })
}

const getMinutes = ({ index }) => {
  const timeNumber = `0${new Date().getMinutes().toString()}`
  const extractedNumber = timeNumber.slice(-2)[index]
  return display.getNumberAsText({ number: extractedNumber })
}

const enhance = compose(
  withState('firstHour', 'setFirstHour', () => getHours({ index: 0 })),
  withState('secondHour', 'setSecondHour', () => getHours({ index: 1 })),
  withState('firstMinute', 'setFirstMinute', () => getMinutes({ index: 0 })),
  withState('secondMinute', 'setSecondMinute', () => getMinutes({ index: 1 })),
  lifecycle({
    componentDidMount() {
      setInterval(() => {
        this.props.setFirstHour(getHours({ index: 0 }))
        this.props.setSecondHour(getHours({ index: 1 }))
        this.props.setFirstMinute(getMinutes({ index: 0 }))
        this.props.setSecondMinute(getMinutes({ index: 1 }))
      }, 5000)
    },
  }),
)

export const Clock = enhance(
  ({ firstHour, secondHour, firstMinute, secondMinute }) => (
    <NumberContainer>
      <Number display={display[firstHour]} />
      <Number display={display[secondHour]} />
      <Number display={display.colon} />
      <Number display={display[firstMinute]} />
      <Number display={display[secondMinute]} />
    </NumberContainer>
  ),
)
