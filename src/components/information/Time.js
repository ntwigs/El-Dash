import * as React from 'react'
import { compose, withState, lifecycle, defaultProps } from 'recompose'
import { Number } from '../common/Character'
import * as display from '../../util/numbers'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'

const extractValue = ({ index }) => ({ date }) => ({ number: date.slice(-2)[index] })
const addZero = ({ date }) => ({ date: `0${ date }` })
const setDateString = ({ date }) => ({ date: date.toString() })
const getDate = ({ index }) =>
  compose(display.getNumberAsText, extractValue({ index }), addZero, setDateString)

const getHours = ({ index }) => {
  const date = new Date().getHours()
  return getDate({ index })({ date })
}

const getMinutes = ({ index }) => {
  const date = new Date().getSeconds()
  return getDate({ index })({ date })
}

const enhance = compose(
  withState('firstHour', 'setFirstHour', () => getHours({ index: 0 })),
  withState('secondHour', 'setSecondHour', () => getHours({ index: 1 })),
  withState('firstMinute', 'setFirstMinute', () => getMinutes({ index: 0 })),
  withState('secondMinute', 'setSecondMinute', () => getMinutes({ index: 1 })),
  defaultProps({ amount: 5 }),
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

const getTime = (time, props) => {
  const timeArray = [...Object.values(time)]
  const generatedCharacters = generateCharacters(display, timeArray)
  return generatedCharacters(props)
}

export const Time = enhance(
  ({ firstHour, secondHour, firstMinute, secondMinute, small, amount, animation }) => (
    <Container small={ small } amount={ amount }>
      {getTime(
        { firstHour, secondHour, colon: 'colon', firstMinute, secondMinute },
        { small, animation, amount },
      )}
    </Container>
  ),
)
