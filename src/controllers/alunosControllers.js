import path from 'path'
import alunos from '../models/alunosModels.js'

function alunosController () {

    const caminho = path.posix.resolve('./')

    const mostrarPagina = (req, res) => {
        res.status(200).sendFile(`${caminho}/src/public/html/alunos.html`)
    }

    const exibirAlunos = (req, res) => {
        alunos.find({ nome: /./i }, 'nome idade faltas', (error, data) => {
            if (error) {
                res.status(500).send({mensagem: error})
            } else {
                res.status(200).send(data)
            }
        })
    }

    const exibirPorNome = (req, res) => {
        const { aluno } = req.params
        
        alunos.find({ nome: aluno }, 'nome idade faltas', (error, data) => {
            if (error) {
                res.status(500).send({mensagem: error})
            } else {
                res.status(200).send(data)
            }
        })
    }

    const adicionarFalta = (req, res) => {
        const { aluno } = req.params
        const { faltas } = req.body
        
        alunos.findOneAndUpdate({nome: aluno}, {faltas: faltas},(error) => {
            if (error) {
                res.status(500).send({mensagem: error})
            } else {
                res.status(201).send({mensagem: 'Operação concluída'})
            }
        })
    }

    return {
        mostrarPagina,
        exibirAlunos,
        exibirPorNome,
        adicionarFalta
    }
}

export default alunosController