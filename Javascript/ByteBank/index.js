class Cliente {
  // Criando uma classe
  nome; //Entre as chaves eu tenho campos ou atributos
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;
}

//Criar clientes
const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();
const cliente4 = new Cliente(); 

/*
Add atributos dos clientes cliente1, cliente2, cliente3 e cliente4
*/

//cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = "422.432.080-08";

//cliente2
cliente2.nome = "Alice";
cliente2.cpf = "807.886.370-53";

//cliente3
cliente3.nome = "Tom Brady";
cliente3.cpf = "202.174.270-90";

//cliente4
cliente4.nome = "Lavonte David";
cliente4.cpf = "471.392.610-83";




//Criar contas
const contaCorrenteRicardo = new ContaCorrente();
const contaCorrenteAlice = new ContaCorrente();
const contaCorrenteTom = new ContaCorrente();
const contaCorrenteLavonte = new ContaCorrente();

/*
Add atributos nas Contas
*/

//Ricardo
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

//Alice
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1001;

/* 
Movimentações na conta
*/

// Depósito Ricardo
contaCorrenteRicardo.saldo = 100;

//Saque Ricardo
let valorSacado = 20;
var saque;
//Condição para saque
if (contaCorrenteRicardo.saldo >= valorSacado) {
    contaCorrenteRicardo.saldo -= valorSacado;
    saque = "R$ " + valorSacado; // O + aqui concatena
} else {
    saque = "Valor insuficiente.";
}


/* Extrato da conta */

//Ricardo
console.log(`Cliente: ${cliente1.nome}`);
console.log(`CPF: ${cliente1.cpf}`);
console.log(`Agência: ${contaCorrenteRicardo.agencia}`);
console.log(`Saldo: R$ ${contaCorrenteRicardo.saldo}`);
console.log(`Saque: ${saque}`);

console.log();

//Alice
console.log(`Cliente: ${cliente2.nome}`);
console.log(`CPF: ${cliente2.cpf}`);
console.log(`Agência ${contaCorrenteAlice.agencia}`);
console.log(`Saldo: R$ ${contaCorrenteAlice.saldo}`);

console.log()

//Tom Brady
console.log(`Clente: ${cliente3.nome}`);
console.log(`CPF: ${cliente3.cpf}`);
console.log(`Agência: ${contaCorrenteTom.agencia}`);
console.log(`Saldo: ${contaCorrenteTom.saldo}`);

console.log();

//Lavonte
console.log(`Cliente:${cliente4.nome}`);
console.log(`CPF:${cliente4.cpf}`);
console.log(`Agência:${contaCorrenteLavonte.agencia}`);
console.log(`Saldo:${contaCorrenteLavonte.saldo}`);

