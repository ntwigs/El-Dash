import express from 'express'
import dotenv from 'dotenv'
import { githubRoutes } from './routes/github'

dotenv.config()
const app = express()
const PORT = 3000

app.use(githubRoutes)

app.listen(PORT, () => console.log(`Server is running on: ${ PORT }`))
