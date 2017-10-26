import { CronJob } from 'cron'
import { startWeatherProcess } from './http/weather'

/** Checks the weather every hour */
new CronJob('* * * * * *', () => {
  startWeatherProcess()
}, null, true)

