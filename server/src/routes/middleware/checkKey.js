import * as keys from '../../config'

export const checkKey = (key, value) => async (ctx, next) => {
  if (!keys[key].key && key.length > 1) {
    ctx.status = 400
    return ctx.body = 'api'
  }
  await next()
}
