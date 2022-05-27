const firstName = "Eva";
const lastName = "Cristina";
const salario = 3000.01;

if (salario < 1903.98) {
  console.log(`Contribuinte: ${firstName} ${lastName}`);
  console.log(`Salário: R$ ${salario}`);
  console.log(`Alíquota: Isento`);
} else if (salario > 1903.98 && salario <= 2826.65) {
  console.log(`Contribuinte: ${firstName} ${lastName}`);
  console.log(`Salário: R$ ${salario}`);
  console.log(`Alíquota: 7,5%`);
  console.log(`Valor deduzível: R$ 142,80`);
} else {
  console.log(`Contribuinte: ${firstName} ${lastName}`);
  console.log(`Salário: R$ ${salario}`);
  console.log(`Alíquota: 15%`);
  console.log(`Valor deduzível: R$ 354,80`);
}
