import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { forecastApi } from '../config'

const fetchJson = async url => {
  const data = await fetch(url)
  return data.json()
}

const getWeather = async ({ loc }) =>
  fetchJson(`https://api.darksky.net/forecast/${ forecastApi }/${ loc }`)

const getLocation = async () => fetchJson('http://ipinfo.io/json')

const writeWeather = async weatherData => {
  const fsWrite = promisify(fs.writeFile)
  fsWrite(path.join(__dirname, '../../../weather.json'), `{ "weather": ${ weatherData } }`)
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
