#!/usr/bin/env node

const fetch = require('node-fetch')
const fs = require('fs')
const util = require('util')
const CronJob = require('cron').CronJob

const fetchJson = async url => {
  const data = await fetch(url)
  return data.json()
}

const getWeather = async ({ loc }) =>
  fetchJson(`https://api.darksky.net/forecast/673582a3e494c0db0c6b513cdf87b605/${ loc }`)

const getLocation = async () => fetchJson('http://ipinfo.io/json')

const writeWeather = async weatherData => {
  const fsWrite = util.promisify(fs.writeFile)
  fsWrite('./src/static/weather.json', `{ "weather": ${ weatherData } }`)
}

const farenheitToCelsius = f => (f - 32) * 5 / 9

const initialize = async () => {
  const location = await getLocation()
  const { currently } = await getWeather(location)
  const degrees = farenheitToCelsius(currently.temperature)
  await writeWeather(degrees)
}

new CronJob('* 0-23 * * * *', () => {
  initialize()
}, null, true)
