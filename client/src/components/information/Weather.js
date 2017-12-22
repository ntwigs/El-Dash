import * as React from 'react'
import {
  compose,
  withState,
  lifecycle,
  mapProps,
  defaultProps,
} from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'

const getWeatherText = ({ temperature, ...props }) => {
  const generatedCharacters = generateCharacters(temperature)
  return generatedCharacters(props)
}

const setState = async ({ props }) => {
  const res = await fetch('http://localhost:3001/weather')
  const weather = await res.json()
  props.setTemperature(weather)
}

const enhance = compose(
  withState('temperature', 'setTemperature', { celsius: 0, farenheit: 0 }),
  defaultProps({ farenheit: false }),
  mapProps(({ temperature, farenheit, ...props }) => {
    const scale = farenheit ? 'f' : 'c'
    const temperatureScale = farenheit
      ? temperature.farenheit
      : temperature.celsius
    const temperatureArray = temperatureScale
      .toString()
      .concat('*', scale)
      .split('')
    return {
      ...props,
      temperature: temperatureArray,
      amount: temperatureArray.length,
    }
  }),
  lifecycle({
    async componentDidMount() {
      const hour = 3600000
      setState(this)
      setInterval(async () => {
        setState(this)
      }, hour)
    },
  }),
)

export const Weather = enhance(props => (
  <Container props>{getWeatherText(props)}</Container>
))
