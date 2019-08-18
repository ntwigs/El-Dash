import * as React from 'react'
import {compose, withState, lifecycle, defaultProps, mapProps} from 'recompose'
import {Container} from '../common/Container'
import {generateCharacters} from '../common/generateCharacters'

const weekdays = {
  0: 'sunday',
  1: 'monday',
  2: 'tuesday',
  3: 'wednesday',
  4: 'thursday',
  5: 'friday',
  6: 'saturday',
}

const getWeekday = () => {
  const weekday = new Date().getDay()
  return weekdays[weekday]
}

const getWeekdayText = ({weekday, ...props}) => {
  const generatedCharacters = generateCharacters(weekday)
  return generatedCharacters(props)
}

const enhance = compose(
  withState('weekday', 'setWeekday', () => getWeekday()),
  defaultProps({weekday: weekdays[0]}),
  mapProps(props => ({
    ...props,
    text: props.weekday.toLowerCase().split(''),
    amount: props.weekday.length,
  })),
  lifecycle({
    componentDidMount() {
      setInterval(() => {
        this.props.setWeekday(getWeekday())
      }, 360000)
    },
  }),
)

export const Weekday = enhance(props => (
  <Container {...props}>{getWeekdayText(props)}</Container>
))
