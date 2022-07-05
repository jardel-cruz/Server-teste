import alunos from "../models/alunosModels.js"

 const addAluno = (req, res) => {
    const {nome, idade, faltas} = req.body
    const aluno = alunos(
        {
            nome: nome,
            idade: idade,
            faltas: faltas
        }
    )
    aluno.save((error) => {
        if (error) {
            res.status(500).send({mens: error})
        } else {
            res.status(302).redirect('/')
        }
    })
}

export default {addAluno}