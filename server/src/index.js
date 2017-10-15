import * as Hapi from 'hapi'
import { routes } from './routes'

const server = new Hapi.Server()
const PORT = 8081

server.connection({
  host: 'localhost',
  port: 8081,
})

server.route(routes)

server.start(() => console.log(`Server up and running on port: ${PORT}`))
