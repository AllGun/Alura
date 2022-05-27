/*
O JavaScript é uma linguagem de tipagem fraca
Em alguns casos, como nos exemplos abaixo, ela converte automaticamente para o tipo que fizer sentido 
caso não haja declaração
*/



console.log("ano" + 2020); //Ele vai concatenar (somar um texto com um número)

console.log(typeof("2" + "2")); //Concatenou o string "2" com o "2"

console.log(parseInt("2") + parseInt("2")); // o parseInt vai converter o string para number

console.log(typeof("10" / "2")); //aqui ele converteu a string "10" e "2" e executou a divisão

console.log("Alfredo" / "2"); // Vai retornar como Not a Number (NaN)

console.log(7 / 2);
console.log(typeof(7 / 2));

const quociente = 7 / 2;
console.log(typeof(quociente));

console.log(6.5,6.25);

console.log(6.5);
console.log(typeof(6,5));