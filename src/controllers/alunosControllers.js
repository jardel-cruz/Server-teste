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

    const addFalta = (req, res) => {
        const listaAlunos = alunos.find((error, data) => {
            if (error) {
                res.status(500).send({mensagem: error})
            } else {
                res.status(200).send(listaAlunos)
                return data
            }
        })

        console.log(listaAlunos)
    }

    return {
        mostrarPagina,
        exibirAlunos,
        addFalta
    }
}

export default alunosController