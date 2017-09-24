import * as React from 'react'
import styled from 'styled-components'
import { compose, withState, lifecycle } from 'recompose'
import { Number } from '../common/PixelSymbol'
import * as display from '../../utils/numbers'

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 143px;
  zoom: 25%;
  position: relative;
  right: 75px;
`

const extractValue = ({ index }) => ({ date }) => ({ number: date.slice(-2)[index] })
const addZero = ({ date }) => ({ date: `0${ date }` })
const setDateString = ({ date }) => ({ date: date.toString() })
const getDate = ({ index }) => compose(
  display.getNumberAsText,
  extractValue({ index }),
  addZero,
  setDateString,
)

const getHours = ({ index }) => {
  const date = new Date().getHours()
  return getDate({ index })({ date })
}

const getMinutes = ({ index }) => {
  const date = new Date().getMinutes()
  return getDate({ index })({ date })
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

const getTime = (time) => {
  const timeArray = [...Object.values(time)]
  return new Array(5)
    .fill(<div />)
    .map((tag, index) => <Number key={ index } display={ display[timeArray[index]] } />)
}

export const Time = enhance(({ firstHour, secondHour, firstMinute, secondMinute }) => (
  <Container>
    { getTime({ firstHour, secondHour, colon: 'colon', firstMinute, secondMinute }) }
  </Container>
))
