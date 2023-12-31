// Função de multiplicação
function multiplicar(a: number, b: number): number {
    return a * b;
}

// Função de saudação
function saudacao(nome: string): string {
    return "Olá " + nome;
}

// Aplicação
const resultadoMultiplicar = multiplicar(9, 2);
const resultadoMensagem = saudacao("Jay");

console.log(resultadoMultiplicar);
console.log(resultadoMensagem);