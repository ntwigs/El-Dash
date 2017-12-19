import Router from 'koa-router'
import { forecast } from '../config'
import { toCelsius } from '../util/toCelsius'
import { jFetch } from '../util/jFetch'
import { checkKey } from './middleware/checkKey'

const router = new Router()

router.get('/weather', async (ctx, next) => {
  const { loc } = await jFetch('http://ipinfo.io/json')
  const { currently } = await jFetch(
    `https://api.darksky.net/forecast/${forecast.key}/${loc}`,
  )
  const farenheit = Math.round(currently.temperature)
  const celsius = Math.round(toCelsius(farenheit))

  ctx.body = {
    farenheit,
    celsius,
  }
})

export const weatherRouter = router
