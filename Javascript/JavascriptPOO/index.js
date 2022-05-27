class Client {
  name;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  /*
  Método sacar
    - O cliente não pode sacar:
      se não houver saldo;
      se não não tiver cheque especial*
        *O cheque especial da ao cliente um crédito que pode ser sacado
  */
  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      //console.log(`Saque R$ ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  /*
  Método depositar
    - O valor não pode ser negativo
    - O valor não pode ser igual a 0
  */
  depositar(valor){
    if (valor > 0){
      this.saldo += valor;
      //console.log(`Depósito R$ ${this.saldo}`);
      
    }
  }
}

//Aqui eu crio um cliente
const client1 = new Client();

// Dados iniciais para abertura da conta
client1.name = "Pereira";
client1.cpf = 58788687090;


const contaCorrentePereira = new ContaCorrente();
contaCorrentePereira.saldo = 0;
ContaCorrente.agencia = 1001;


// Ações feitas na conta do Pereira
console.log(`Cliente: ${client1.name}`);

//Aqui eu chamei o método depositar na conta contaCorrentePereira
contaCorrentePereira.depositar(100);
contaCorrentePereira.sacar(50);
contaCorrentePereira.depositar(200);
contaCorrentePereira.sacar(35);
console.log(`Saldo: ${contaCorrentePereira.saldo}`);

console.log(contaCorrentePereira);
