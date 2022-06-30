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

//Add atributos ao cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = "111.222.333-44";

//Add atributos ao cliente2
cliente2.nome = "Alice";
cliente2.cpf = "222.333.444-55";



//Criar contas
const contaCorrenteRicardo = new ContaCorrente();
const contaCorrenteAlice = new ContaCorrente();

//Add atributos na conta do Ricardo
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

//Add atributos na conta da Alice
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1001;

//Movimentações conta Ricardo
contaCorrenteRicardo.saldo = 100;

//Saque
let valorSacado = 20;
var saque;
//Condição para saque
if (contaCorrenteRicardo.saldo >= valorSacado) {
    contaCorrenteRicardo.saldo -= valorSacado;
    saque = "R$ " + valorSacado; // O + aqui concatena
} else {
    saque = "Valor insuficiente.";
}

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
