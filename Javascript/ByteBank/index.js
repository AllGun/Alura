class Cliente { // Criando uma classe
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

//Add atributos ao cliente1
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

//Add atributos ao cliente2
cliente2.nome = "Alice";
cliente2.cpf = 22233344455;

//Criar contas
const contaCorrenteRicardo = new ContaCorrente();
const contaCorrenteAlice = new ContaCorrente();

//Add atributos na conta do Ricardo
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;

//Add atributos na conta da Alice
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1001;

//Ricardo
console.log(`Cliente: ${cliente1.nome}`);
console.log(`CPF: ${cliente1.cpf}`);
console.log(`Agência: ${contaCorrenteRicardo.agencia}`);
console.log(`Saldo: R$ ${contaCorrenteRicardo.saldo}` );

console.log();

//Alice
console.log(`Cliente: ${cliente2.nome}`);
console.log(`CPF: ${cliente2.cpf}`);
console.log(`Agência ${contaCorrenteAlice.agencia}`);
console.log(`Saldo: R$ ${contaCorrenteAlice.saldo}`);


