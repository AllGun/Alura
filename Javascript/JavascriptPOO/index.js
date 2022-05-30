import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

//Aqui eu crio um cliente
const client1 = new Client();

// Dados iniciais para abertura da conta
client1.name = "Pereira";
client1.cpf = 58788687090;

const contaCorrentePereira = new ContaCorrente();
contaCorrentePereira.agencia = 1001;

// Ações feitas na conta do Pereira
console.log(`Cliente: ${client1.name}`);

//Aqui eu chamei o método depositar na conta contaCorrentePereira
contaCorrentePereira.depositar(100);

contaCorrentePereira.depositar(200);
contaCorrentePereira.depositar(200);

const valorSacado = contaCorrentePereira.sacar(50);
console.log(`Saque: R$ ${valorSacado}`);

console.log(`Saldo: R$ ${contaCorrentePereira._saldo}`);

console.log(contaCorrentePereira);
