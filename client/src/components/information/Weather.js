import * as React from 'react'
import { compose, withState, lifecycle, mapProps, defaultProps } from 'recompose'
import { Container } from '../common/Container'
import { generateCharacters } from '../common/generateCharacters'
import weather from '../../../data/weather.json'

const getWeatherText = ({ temperature, ...props }) => {
  const generatedCharacters = generateCharacters(temperature)
  return generatedCharacters(props)
}

const enhance = compose(
  withState('temperature', 'setTemperature', 0),
  defaultProps({ temperature: 0, farenheit: false }),
  mapProps(({ temperature, farenheit, ...props }) => {
    const scale = farenheit ? 'f' : 'c'
    const temperatureScale = farenheit ? temperature * (9 / 5) + 32 : temperature
    const temperatureArray = Math.round(temperatureScale)
      .toString().concat('*', scale)
      .toLowerCase()
      .split('')
    return Object.assign({}, props, {
      temperature: temperatureArray,
      amount: temperatureArray.length,
    })
  }),
  lifecycle({
    async componentDidMount() {
      setInterval(() => {
        this.props.setTemperature(weather.weather)
      }, 5000)
    },
  }),
)

export const Weather = enhance(props => (
  <Container { ...props }>{getWeatherText({ ...props })}</Container>
))
