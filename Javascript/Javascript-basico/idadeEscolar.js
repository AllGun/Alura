const aluno = "Ana Júlia";
const idade = "4";

if (idade <= 6) {
  console.log(`Matricular ${aluno} na pré-ecola.`);
} else if (idade > 6 && idade <= 14) {
  console.log(`Matricular ${aluno} no fundamental.`);
} else if (idade > 14 && idade <= 18) {
  console.log(`Matricular ${aluno} no ensino médio.`);
} else {
  console.log(`Matricular ${aluno} no ensino superior.`);
}
