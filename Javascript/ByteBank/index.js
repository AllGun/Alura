class Cliente { // Criando uma classe
    nome; //Entre as chaves eu tenho campos ou atributos
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 22233344455;


const contaCorrenteRicardo = new ContaCorrente();

console.log(cliente1);
console.log(cliente2);


