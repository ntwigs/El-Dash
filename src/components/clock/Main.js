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
  const timeNumber = new Date().getHours().toString()[index]
  return display.getNumberAsText({ number: timeNumber })
}

const getMinutes = ({ index }) => {
  const timeNumber = new Date().getMinutes().toString()[index]
  return display.getNumberAsText({ number: timeNumber })
}

const enhance = compose(
  withState('firstHour', 'setFirstHour', () => getHours({ index: 0 })),
  withState('secondHour', 'setSecondHour', () => getHours({ index: 1 })),
  withState('firstMinute', 'setFirstMinute', () => getMinutes({ index: 0 })),
  withState('secondMinute', 'setSecondMinute', () => getMinutes({ index: 1 })),
  lifecycle({
    componentDidMount() {
      setInterval(() => {
        this.props.setFirstHour(
          getHours({ index: 0 }),
        )
        this.props.setSecondHour(
          getHours({ index: 1 }),
        )
        this.props.setFirstMinute(
          getMinutes({ index: 0 }),
        )
        this.props.setSecondMinute(
          getMinutes({ index: 1 }),
        )
      }, 5000)
    },
  }),
)

export const Clock = enhance(
  ({ firstHour, secondHour, firstMinute, secondMinute }) => (
    <NumberContainer>
      <Number display={display[firstHour]} />
      <Number display={display[secondHour]} />
      <Number display={display[firstMinute]} />
      <Number display={display[secondMinute]} />
    </NumberContainer>
  ),
)
