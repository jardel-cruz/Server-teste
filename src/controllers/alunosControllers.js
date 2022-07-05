import path from 'path'
import alunos from '../models/alunosModels.js'

function alunosController () {

    const caminho = path.posix.resolve('./')

    const mostrarPagina = (req, res) => {
        res.status(200).sendFile(`${caminho}/src/public/html/alunos.html`)
    }

    const exibirAlunos = (req, res) => {
        alunos.find((error, data) => {
            if (error) {
                res.status(500).send({mensagem: error})
            } else {
                const objAluno = data.map(({nome, idade, faltas}) => {
                    const temp = {nome: nome, idade: idade, faltas: faltas}
                    return temp
                })
                res.status(200).send(objAluno)
            }
        })
    }
    return {
        mostrarPagina,
        exibirAlunos
    }
}

export default alunosController