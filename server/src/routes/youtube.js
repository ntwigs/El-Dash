import Router from 'koa-router'
import { youtube } from '../config'
import { jFetch } from '../util/jFetch'
const router = new Router()

router.get('/youtube/:channelName', async (ctx, next) => {
  const { channelName } = ctx.params
  const { items } = await jFetch(`
    https://www.googleapis.com/youtube/v3/channels?part=statistics&key=${youtube.key}%20&forUsername=${channelName}
  `)
  const { hiddenSubscriberCount, ...display } = items[0].statistics
  ctx.body = display
})

export const youtubeRouter = router
