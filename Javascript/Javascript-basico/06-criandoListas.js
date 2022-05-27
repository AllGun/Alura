console.log("Trabalhando com listas");
/*
Quando criamos uma lista criamos um espaço na memória para armazenar dados
Ao criar uma lista usamos o comando "const"
Em uma lista eu posso adicionar mais elementos
Como eu posso adicionar mais elemtenos em uma lista se ela é uma variável const?
imaginemos que o comando que cria uma lista cria uma caixa(q é o espaço reservado)
Essa cx criada é uma caixa de bombons, por exemplo... dentro dela eu posso ter 
muitos chocolates mas tb nenhum.
O que eu não posso é colocar sapatos dentro dessa caixa pq nessa caso seria
o mesmo que reatribuir um valor a uma const o que é impossível.
*/

{
    const salvador = `Salvador`;
    const saoPaulo = `São Paulo`;
    const rioDeJaneiro = `Rio de Janeiro`;

    console.log("Destinos possíveis: ");
    console.log(salvador, saoPaulo, rioDeJaneiro);
}

const listaDeDestinos = new Array(
    "Salvador",
    "Rio de Janeiro",
    "Fortaleza",
    "Gramado",
    "Campos do Jordão",
    "Alter do chão",
    "Curitiba",
    "Santa Catarina"
);

console.log(listaDeDestinos);

listaDeDestinos.push("Maceió"); //Adicionando elemento na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(2, 1); //Deletar o terceiro na lista e apenas um elemento

listaDeDestinos.splice(6, 1); //Deletar o Sétimo na lista e apenas um elemento

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //Deletar o segundo elemento e apenas um elemento
console.log(listaDeDestinos);

listaDeDestinos.splice(0, 1); //Deletar o primeiro e apenas um elemento na lista
console.log(listaDeDestinos);

console.log(listaDeDestinos[0]); //Mostra o primeiro elemento da lista
console.log(listaDeDestinos[1]); //Mostra o segundo elemento da lista
console.log(listaDeDestinos[2]); //Mostra o terceiro elemenot da lista
console.log(listaDeDestinos[3]); //Mostra o quarto elemento da lista
console.log(listaDeDestinos[4]); //Mostra o quinto elemento da lista


const capitais = new Array (
    "Goiània",
    "Brasília",
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Manaus",
    "São Luís"
);
console.log(capitais);
