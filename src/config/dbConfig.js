import dotenv from 'dotenv'
import mongoose from "mongoose"
dotenv.config({path: './src/config/.env'})

const {NOME, SENHA} = process.env

mongoose.connect(`mongodb+srv://${NOME}:${SENHA}@cluster0.deg56.mongodb.net/turma`)
const db = mongoose.connection

export default db