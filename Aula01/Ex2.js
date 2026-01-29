// Calculadora de Gastos Mensais
let salario = prompt("Digite o valor do seu salário mensal:");
let aluguel = prompt("Digite o valor do aluguel:");
let alimentacao = prompt("Digite o valor da alimentação:");
let lazer = prompt("Digite o valor do lazer:");

// Calcular despesas totais
const totalDespesas = parseInt(aluguel) + parseInt(alimentacao) + parseInt(lazer);

// Calcular saldo restante
const saldo = parseInt(salario) - totalDespesas;

// Verificar e exibir situação do saldo
if (saldo > 0) {
    console.log("Saldo Positivo");
    console.log(`Saldo: R$ ${saldo}`);
} else if (saldo === 0) {
    console.log("No Limite");
} else {
    console.log("Saldo Negativo");
    console.log(`Débito: R$ ${Math.abs(saldo)}`);
}

alert(`\nDetalhamento:`);
alert(`Salário: R$ ${salario}`);
alert(`Total de Despesas: R$ ${totalDespesas}`);
alert(`Saldo: R$ ${saldo}`);