import { setupRoutes } from '@/main/config/routes'
import { setupApoloServer } from '@/main/config/apollo-server'
import express from 'express'


const app = express()
setupApoloServer(app)
setupRoutes(app)


export default app
