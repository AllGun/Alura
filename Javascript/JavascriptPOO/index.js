import {Client} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js";

//Aqui eu crio um cliente
const client1 = new Client();
const client2 = new Client();


// Dados iniciais para abertura da conta
client1.name = "Pereira";
client1.cpf = 58788687090;

client2.name = "Alice";
client2.cpf = 81250709075;


const contaCorrentePereira = new ContaCorrente();
contaCorrentePereira.agencia = 1001;
contaCorrentePereira.client = client1

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

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.client = client2;
contaCorrenteAlice.agencia = 1002;

console.log(contaCorrenteAlice)