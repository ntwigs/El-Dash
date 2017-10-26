import { CronJob } from 'cron'
import { startWeatherProcess } from './http/weather'
import { startCommitProcess } from './http/github'

/** Checks the weather every hour */
new CronJob('* * * * * *', () => {
  startWeatherProcess()
}, null, true)

/** Checks the commits every hour */
new CronJob('* * * * * *', () => {
  startCommitProcess()
}, null, true)

