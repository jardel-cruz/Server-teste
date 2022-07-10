import express from 'express'
import alunosController from '../controllers/alunosControllers.js'

const {
    mostrarPagina,
    exibirAlunos,
    exibirPorNome,
    adicionarFalta
} = alunosController()

const route = express.Router()

route
    .get('/alunos', mostrarPagina)
    .get('/alunos/info', exibirAlunos)
    .get('/alunos/info/:aluno', exibirPorNome)
    .post('/alunos/info/:aluno', adicionarFalta)

export default route