import express from 'express'
import alunosController from '../controllers/alunosControllers.js'

const {
    mostrarPagina,
    exibirAlunos,
    addFalta
} = alunosController()

const route = express.Router()

route
    .get('/alunos', mostrarPagina)
    .get('/alunos/info', exibirAlunos)
    .get('/alunos/falta', addFalta)

export default route