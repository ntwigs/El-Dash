import Koa from 'koa'
import compose from 'koa-compose'
import cors from 'koa2-cors'
import { weatherRouter } from './routes/weather'
import { githubRouter } from './routes/github'

const app = new Koa()
const PORT = 3000

app.use(cors())
app.use(compose([weatherRouter.routes(), githubRouter.routes()]))

app.listen(PORT, () => console.log(`SERVER: ${PORT}`))
