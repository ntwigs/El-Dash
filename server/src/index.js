import Koa from 'koa'
const app = new Koa()
const PORT = 3000

app.use(ctx => ctx.body = 'Hey')

app.listen(PORT, () => console.log(`SERVER: ${ PORT }`))