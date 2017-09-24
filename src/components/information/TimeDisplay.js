import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/numbers'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 200px;
  zoom: 25%;
  position: relative;
  right: 75px;
`

const extractValue = ({ date, index }) => {
  return ({ number: date.slice(-2)[index] })
}
const addZero = ({ date, ...props }) => ({ date: `0${ date }`, ...props })
const setDateString = ({ date, ...props }) => ({ date: date.toString(), ...props })

const getDate = compose(display.getNumberAsText, extractValue, addZero, setDateString)

const getHours = ({ index }) => {
  const date = new Date().getHours()
  return getDate({ date, index })
}

const getMinutes = ({ index }) => {
  const date = new Date().getMinutes()
  return getDate({ date, index })
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
      }, 2000)
    },
  }),
)

export const Time = enhance(({ firstHour, secondHour, firstMinute, secondMinute }) => (
  <Container>
    <Number display={ display[firstHour] } />
    <Number display={ display[secondHour] } />
    <Number display={ display.colon } />
    <Number display={ display[firstMinute] } />
    <Number display={ display[secondMinute] } />
  </Container>
))
