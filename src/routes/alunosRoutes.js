import express from 'express'
import alunosController from '../controllers/alunosControllers.js'

const {
    mostrarPagina,
    exibirAlunos
} = alunosController()

const route = express.Router()

route
    .get('/alunos', mostrarPagina)
    .get('/alunos/info', exibirAlunos)

export default route