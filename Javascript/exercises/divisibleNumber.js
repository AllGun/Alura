// Construa um programa que verifique se um número é divisível por outro

function DivisibleNumber(number1, number2) {
  if (number1 > number2) {
    if (number1 % number2 === 0) {
      console.log(`O número ${number1} é divisível por ${number2}`);
    } else {
      console.log(`O número ${number1} não é divisível por ${number2}`);
      console.log(number1 % number2);
    }
  } else {
    console.log("O primeiro número deve ser maior que o segundo.");
  }
}

DivisibleNumber(500, 2);
