import path from 'path'
import alunos from '../models/alunosModels.js'

function alunosController () {

    const caminho = path.posix.resolve('./')

    const mostrarPagina = (req, res) => {
        res.status(200).sendFile(`${caminho}/src/public/html/alunos.html`)
    }

    const exibirAlunos = (req, res) => {
        alunos.find({nome: /./i }, 'nome idade faltas', (error, data) => {
            if (error) {
                res.status(500).send({mensagem: error})
            } else {
                res.status(200).send(data)
            }
        })
    }
    return {
        mostrarPagina,
        exibirAlunos
    }
}

export default alunosController