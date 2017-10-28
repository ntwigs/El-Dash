import { forecastApi } from '../config'
import { fetch, writeData } from './util/tools'

const getWeather = async ({ loc }) =>
  fetch(`https://api.darksky.net/forecast/${ forecastApi }/${ loc }`)()

const getLocation = async () => fetch('http://ipinfo.io/json')()

const writeWeather = async weatherData => {
  const writeDataTo = writeData(`{ "weather": ${ weatherData } }`)
  writeDataTo('weather')
}

const farenheitToCelsius = ({ temperature }) => {
  const eqOne = temperature - 32
  const eqTwo = 5 / 9
  return eqOne * eqTwo
}

export const startWeatherProcess = async () => {
  const location = await getLocation()
  const { currently } = await getWeather(location)
  const degrees = farenheitToCelsius(currently)
  await writeWeather(degrees)
}
