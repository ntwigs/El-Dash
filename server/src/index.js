import Koa from 'koa'
import compose from 'koa-compose'
import { weatherRouter } from './routes/weather'
import { githubRouter } from './routes/github'

const app = new Koa()
const PORT = 3000

app.use(compose([weatherRouter.routes(), githubRouter.routes()]))

app.listen(PORT, () => console.log(`SERVER: ${PORT}`))
