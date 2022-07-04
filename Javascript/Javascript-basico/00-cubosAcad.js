/*
Atribuição: =


Igualdade: ==
    Retorna true caso os operadores sejam iguais sem comparar tipo

Estritamente igual: ===
    Retorna true caso os operadores sejam iguais em valor e tipo

Diferente: !=
    Retorna true caso os operadores não sejam iguais

Estritamente diferentes: !===
    Retorna true caso os operadores não sejam iguais em valor e tipo


*/

// let igualdade = 5 == 6;
// console.log(igualdade);

// let diferente = 5 != 6;
// console.log(diferente);

// let estritamenteIgual = 5 == "5";
// console.log(estritamenteIgual);

let casa = true;

if (casa) {
  console.log("sim");
} else {
  console.log("não");
}

console.log(casa);

const listaDeNomes = ["José", "Maria", "Arthur"];

console.log(listaDeNomes);

const numberListA = [1, 2, 3, 4, 5];
const numberListB = [1, 2, 3, 4, 5];

console.log(numberListA[0] + numberListB[0]);

console.log(numberListA[1] + numberListB[1]);

console.log(numberListA[2] + numberListB[2]);

console.log(numberListA[3] + numberListB[3]);

console.log(numberListA[4] + numberListB[4]);

const colorList = ["Red", "Blue", "Yellow", "Pink", "Brown"];
const nameGirlList = ["Aline", "Júlia", "Camila", "Caroline", "Jamile"];
const books2022 = [];
books2022.push("Mostre seu trabalho");
books2022.push("Siga em frente");
books2022.push("Hábitos Atômicos");
books2022.push("O projeto Fênix");
books2022[4]= "Eu robô";
books2022[5] = "Édipo Rei";
books2022[6] = "Lula";
books2022.push("Java");

console.log(books2022);

console.log(typeof nameGirlList);

console.log(typeof nameGirlList[0]);

const notas = [10, 9, 8, 5, 8, 7];
let soma = 0;

for (let item of notas) {
    soma = soma +item;
}

console.log(soma);

var listaQualquer = [];

listaQualquer.push(1);
console.log(listaQualquer);
console.log(typeof(listaQualquer));

books2022.pop("Java");
console.log(books2022);