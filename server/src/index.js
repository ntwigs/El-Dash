import Koa from 'koa'
import compose from 'koa-compose'
import cors from 'koa2-cors'
import { weatherRouter } from './routes/weather'
import { githubRouter } from './routes/github'
import { youtubeRouter } from './routes/youtube'

const app = new Koa()
const PORT = 3001

app.use(cors())
app.use(compose([weatherRouter.routes(), githubRouter.routes(), youtubeRouter.routes()]))

app.listen(PORT, () => console.log(`SERVER: ${PORT}`))
