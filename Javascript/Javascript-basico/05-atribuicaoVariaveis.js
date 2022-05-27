console.log("Trabalhando com atribuição de variáveis");

const idade = 36;
const nome = "Alfredo";
const sobrenome = "Gutemberg";

console.log(nome, sobrenome, idade);

console.log(`Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`); 
//interpolação de variáveis

let nomeCompleto = nome + sobrenome;
console.log(`Meu nome é ${nomeCompleto}`);

let space = "_";

nomeCompleto = nome + space + sobrenome;
console.log(`Meu nome é ${nomeCompleto} `);