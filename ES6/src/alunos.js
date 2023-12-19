// Criação do array de objetos
const alunos = [
    { nome: 'Jay', nota: 7 },
    { nome: 'Leonardo', nota: 8 },
    { nome: 'Flora', nota: 6 },
    { nome: 'Helena', nota: 4 },
    { nome: 'Rafael', nota: 5 },
];

// Função que retornar alunos com nota maior ou igual a 6
function alunosAprovados(arrayDeAlunos) {
return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

// Exibição do resultado
const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);