import alunos from "../models/alunosModels.js"

 const addAluno = async (req, res) => {
    const {nome, idade, faltas} = req.body

    const novoAluno = alunos(
        {
            nome: nome,
            idade: idade,
            faltas: faltas
        }
    )

    novoAluno.save((error) => {
        if (error) {
            res.status(500).send({mensagem: error})
        } else {
            res.status(302).redirect('/')
        }
    })
}

export default {addAluno}