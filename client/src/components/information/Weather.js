import * as React from 'react'
import { compose, withState, lifecycle, mapProps } from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'
import { getWeather } from '../../http/weather'

const getWeatherText = ({ temperature, ...props }) => {
  const generatedCharacters = generateCharacters(temperature)
  return generatedCharacters(props)
}

const enhance = compose(
  withState('temperature', 'setTemperature', 0),
  mapProps(props =>
    Object.assign({}, props, {
      temperature: props.temperature.toString().toLowerCase().split(''),
      amount: props.temperature.length,
    }),
  ),
  lifecycle({
    async componentDidMount() {
      this.props.setTemperature(await getWeather())
    },
  }),
)

export const Weather = enhance(props => (
  <Container { ...props }>{getWeatherText({ ...props })}</Container>
))
