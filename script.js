
/* Variaveis */

const btnAlterar = document.querySelector('#switch')
const inputNome = document.querySelector('#nome')
const inputSalario = document.querySelector('#salario')
const inputFuncao = document.querySelector('#funcao')
const inputHorario = document.querySelector('#horario')
const inputContrato = document.querySelector('#contrato')
const area = document.querySelector('.area')

/* Array */

const cadastro = [

    { Nome: '' },
    { Salario: '' },
    { Função: '' },
    { Horario: '' },
    { Contrato: '' },

]

/* Funções */
function alterar() {
    cadastro.map((user) => {
        const name = user.Nome = inputNome.value
        const Salaryy = user.Salario = inputSalario.value
        const funci = user.Função = inputFuncao.value
        const Hours = user.Horario = inputHorario.value
        const Contract = user.Contrato = inputContrato.value
        let Nova = `
             <h3>Nome : ${name} </h3>
             <p>Salario : R$ ${Salaryy} </p>
             <p>Função : ${funci}</p>
             <p>Horario : ${Hours} </p>
             <p>Contrato : ${Contract} </p>
        `
        area.innerHTML = Nova
    })
    alert('Colaborador cadastrado com sucesso')
}



