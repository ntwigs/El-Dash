import * as React from 'react'
import {compose, withState, lifecycle, defaultProps, mapProps} from 'recompose'
import {Container} from '../common/Container'
import {generateCharacters} from '../common/generateCharacters'

const getToday = () => {
  const date = new Date()
  const day = `0${date.getDate().toString()}`.slice(-2)
  const month = `0${date.getMonth().toString()}`.slice(-2)
  const year = date.getFullYear()
  return `${day}-${month}-${year}`
}

const getTodayText = ({today, ...props}) => {
  const generatedCharacters = generateCharacters(today)
  return generatedCharacters(props)
}

const enhance = compose(
  withState('today', 'setToday', () => getToday()),
  defaultProps({today: '00-00-0000'}),
  mapProps(props => ({
    ...props,
    text: props.today.toLowerCase().split(''),
    amount: props.today.length,
  })),
  lifecycle({
    componentDidMount() {
      setInterval(() => {
        this.props.setToday(getToday())
      }, 360000)
    },
  }),
)

export const Today = enhance(props => (
  <Container {...props}>{getTodayText(props)}</Container>
))
