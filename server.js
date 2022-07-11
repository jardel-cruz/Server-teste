import app from './src/app.js'
import dotenv from 'dotenv'

dotenv.config({path: './src/config/.env'})

const {PORT} = process.env

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})