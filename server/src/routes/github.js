import Router from 'koa-router'
import { github } from '../config'
import { jFetch } from '../util/jFetch'
import { checkKey } from './middleware/checkKey'

const router = new Router()

router.get('/commits', checkKey('github', 'commits'), async (ctx, next) => {
  const headers = {
    headers: {
      Authorization: `token ${github.key}`,
      'User-Agent': github.username,
    },
  }
  const events = await jFetch(
    `https://api.github.com/users/${github.username}/events`,
    headers,
  )
  const today = new Date().getDate()
  const commits = events
    .filter(
      ({ created_at, payload }) =>
        today === new Date(created_at).getDate() && 'commits' in payload,
    )
    .map(({ payload }) => payload.commits.length)
    .reduce((acc, val) => acc + val, 0)

  ctx.body = { commits }
})

export const githubRouter = router
