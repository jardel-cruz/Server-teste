const bnt = document.querySelector('.bnt')
const main = document.querySelector('.main')

function createElement (tag,obj, classe) {
    const elemento = document.createElement(tag)
    const {nome, idade, faltas} = obj
    elemento.classList.add(classe)
    
    elemento.innerHTML = `
    <p>nome: ${nome}</p>
    <p>idade: ${idade}</p>
    <p>faltas: ${faltas}</p>`

    return elemento
}

bnt.addEventListener('click', async () => {
    try {
        const response = await fetch('http://localhost:3000/alunos/info')
        const body = await response.json()
        body.forEach(aluno => {
            const elemento = createElement('div', aluno, 'bloco')
            main.appendChild(elemento)
        })
        
    } catch (error) {
        console.log(error)
    }
})