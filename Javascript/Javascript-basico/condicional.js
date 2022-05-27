/*
Para que uma pessoa possa comprar passagem ela precisa ter 18 anos ou mais.
Caso ela não tenha 18 anos ou mais, precisa estar acompanhada para poder comprar.


Construa um algoritmo que permita que apenas pessoas com 18 anos ou mais possam comprar passagem.
Caso não tenha 18 ou mais, só permita a venda de passagem se ela estiver acompanhada.
*/

let firstName = "Eva";
let lastName = "Cristina";
let idade = 25;
let acompanhado = false;

if (idade >= 18) {
  console.log(`Passageiro: ${firstName} ${lastName}`);
  console.log(`Idade: ${idade}`);
  console.log(`Acompanhado: Não se aplica`);
  console.log(`Pode comprar passagem.`);
  console.log();
} else {
  if (acompanhado == true) {
    console.log(`Pode comprar passagem.`);
  } else {
    console.log(`"Você precisa estar acompanhado para poder viajar.`);
  }
}

firstName = "Kaio";
lastName = "Eduardo";
idade = 10;
acompanhado = true;

if (idade >= 18) {
  console.log(`Passageiro: ${firstName} ${lastName}`);
  console.log(`Idade: ${idade}`);
  console.log(`Acompanhado: Não se aplica`);
  console.log(`Pode comprar passagem.`);
  console.log();
} else {
  if (acompanhado == true) {
    console.log(`Passageiro: ${firstName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Pode comprar passagem.`);
    console.log();
  } else {
    console.log(`Passageiro: ${firstName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Você precisa estar acompanhado para poder viajar.`);
    console.log();
  }
}

firstName = "Ana Júlia";
lastName = "Gutemberg";
idade = 4;
acompanhado = false;

if (idade >= 18) {
  console.log(`Passageiro: ${firstName} ${lastName}`);
  console.log(`Idade: ${idade}`);
  console.log(`Acompanhado: Não se aplica`);
  console.log(`Pode comprar passagem.`);
  console.log();
} else {
  if (acompanhado == true) {
    console.log(`Passageiro: ${firstName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Acompanhado: Sim`);
    console.log(`Pode comprar passagem.`);
    console.log();
  } else {
    console.log(`Passageiro: ${firstName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Acompanhado: Não`);
    console.log(`Você precisa estar acompanhado para poder viajar.`);
    console.log();
  }
}
