class Client {
  name;
  cpf;
  agencia;
  conta;
  saldo;
}

const client1 = new Client(),
  client2 = new Client(),
  client3 = new Client();

// Dados iniciais para abertura da conta
client1.name = "Pereira";
client1.cpf = 58788687090;
client1.agencia = 1001;
client1.saldo = 0;

client2.name = "Júlia";
client2.cpf = 47860587009;
client2.agencia = 1001;
client2.saldo = 0;

client3.name = "Ania";
client3.cpf = 92661493069;
client3.agencia = 1001;
client3.saldo = 0;

console.log(client1);
console.log(client2);
console.log(client3);
