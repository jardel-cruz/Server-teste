import express from 'express'
import AlunosController from '../controllers/alunosControllers.js'

const route = express.Router()

route
    .get('/alunos', AlunosController.mostrarPagina)
    .get('/alunos/info', AlunosController.exibirAlunos)
    .get('/alunos/info/:aluno', AlunosController.exibirPorNome)
    .post('/alunos/info/:aluno', AlunosController.adicionarFalta)

export default route