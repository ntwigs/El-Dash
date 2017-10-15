import * as React from 'react'
import { compose, withState, lifecycle, defaultProps } from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'

const getHours = ({ index }) => {
  const date = new Date().getHours()
  const full = `0${ date.toString() }`
  return full.slice(-2)[index]
}

const getMinutes = ({ index }) => {
  const date = new Date().getMinutes()
  const full = `0${ date.toString() }`
  return full.slice(-2)[index]
}

const getTime = (time, props) => {
  const timeArray = [...Object.values(time)]
  const generatedCharacters = generateCharacters(timeArray)
  return generatedCharacters(props)
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

export const Time = enhance(
  ({ firstHour, secondHour, firstMinute, secondMinute, ...rest }) => (
    <Container { ...rest } >
      {getTime(
        { firstHour, secondHour, colon: ':', firstMinute, secondMinute },
        rest,
      )}
    </Container>
  ),
)
