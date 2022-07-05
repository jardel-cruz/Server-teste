import mongoose from "mongoose"

const alunoSchema = new mongoose.Schema(
    {
        nome: {type: String, require: true},
        idade: {type: String, require: true},
        faltas: {type: Number, default: 0}
    }
)

const alunos = mongoose.model('alunos', alunoSchema)

export default alunos