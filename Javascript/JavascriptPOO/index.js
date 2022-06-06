import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

//Aqui eu crio um cliente
const cliente01 = new Cliente();
const cliente02 = new Cliente();
const cliente03 = new Cliente();
const cliente04 = new Cliente();
const cliente05 = new Cliente();


//Atribuição de dados ao cliente
cliente01.firstName = "Pereira";
cliente01.lastName = "da Silva";
cliente01.cpf = 58788687090;

cliente02.firstName = "Alice";
cliente02.lastName = "Gutierrez";
cliente02.cpf = 81250709075;

cliente03.firstName = "Thomas";
cliente03.lastName = "Brady";
cliente03.cpf = 48948962060;

cliente04.firstName = "Leonard";
cliente04.lastName = "Fournette";
cliente04.cpf = 51389425061;

cliente05.firstName = "Chris";
cliente05.lastName = "Godwin";
cliente05.cpf = 28013471080;


//Criação da conta
const conta01 = new ContaCorrente();
const conta02 = new ContaCorrente();
const conta03 = new ContaCorrente();
const conta04 = new ContaCorrente();
const conta05 = new ContaCorrente();

//Atribuindo Agência à conta
conta01.agencia = 1001;
conta02.agencia = 1002;
conta03.agencia = 1003;
conta04.agencia = 4004;
conta05.agencia = 5004;

//Vinculando um cliente a uma conta
conta01.cliente = cliente01;
conta02.cliente = cliente02;
conta03.cliente = cliente03;
conta04.cliente = cliente04;
conta05.cliente = cliente05;
















// Ações feitas na conta
console.log(`Cliente: ${cliente01.firstName}`);

//Aqui eu chamei o método depositar na conta "conta01"
conta01.depositar(100);

conta01.depositar(200);
conta01.depositar(200);

const valorSacado = conta01.sacar(50);
console.log(`Saque: R$ ${valorSacado}`);

console.log(`Saldo: R$ ${conta01._saldo}`);

console.log(conta01);





console.log(conta02);

conta01.depositar(500);
conta01.transferir(200, conta02);

console.log(conta01)
console.log();
console.log(conta02);
