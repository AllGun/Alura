import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

//Aqui eu crio um cliente
const cliente01 = new Cliente();
const cliente02 = new Cliente();


// Dados iniciais para abertura da conta
cliente01.firstName = "Pereira";
cliente01.lastName = "da Silva";
cliente01.cpf = 58788687090;

cliente02.firstName = "Alice";
cliente02.lastName = "Gutierrez";
cliente02.cpf = 81250709075;


const conta01 = new ContaCorrente();
conta01.agencia = 1001;
conta01.cliente = cliente01

// Ações feitas na conta do Pereira
console.log(`Cliente: ${cliente01.firstName}`);

//Aqui eu chamei o método depositar na conta contaCorrentePereira
conta01.depositar(100);

conta01.depositar(200);
conta01.depositar(200);

const valorSacado = conta01.sacar(50);
console.log(`Saque: R$ ${valorSacado}`);

console.log(`Saldo: R$ ${conta01._saldo}`);

console.log(conta01);

//Criando uma conta corrente de nome "conta02"
const conta02 = new ContaCorrente();

// vinculando a conta "conta02" com o cliente "cliene02"
conta02.cliente = cliente02;

//aqui eu atribuo à agência um número de identificação
conta02.agencia = 1010;

console.log(conta02);

conta01.depositar(500);
conta01.transferir(200, conta02);

console.log(conta01)
console.log();
console.log(conta02);
