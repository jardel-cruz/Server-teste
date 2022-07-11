import express from 'express'
import routes from './routes/index.js'
import db from './config/dbConfig.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => console.log('Conectado'))


const app = express()

routes(app)

export default app