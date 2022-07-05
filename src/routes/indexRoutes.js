import express from 'express'
import bodyParser from "body-parser"
import path from 'path'
import homeControllers from '../controllers/homeControllers.js'
import alunos from './alunosRoutes.js'

const caminho = path.posix.resolve('./')

const routes = (app) => {
    app.use(bodyParser.json(), bodyParser.urlencoded({extended: false}))
    app.use('/css', express.static(`${caminho}/src/public/css`))
    app.use('/js', express.static(`${caminho}/src/public/javascript`))

    app.get('/', (req, res) => {
        res.status(200).sendFile(`${caminho}/src/public/html/index.html`)
    })
    app.post('/', homeControllers.addAluno)

    app.use(
        alunos
        )
}

export default routes

