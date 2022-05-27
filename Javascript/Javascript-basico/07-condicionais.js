console.log("Trabalhando com condicionais");

const firstName = "Alfredo";
const lastName = "Gutemberg";
const idadeComprador = 18;
const estaAcompanhado = true;
const destino = "Vitória"

const listaDeCapitais = new Array(
    'Porto Alegre',
    'Florianópolis',
    'Curitiba',
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Vitória',
    'Salvador',
    'Brasília',
    'Goiânia',
    'Cuiabá',
    'Campo Grande',
);

const listaDeEstados = new Array(
    'Rio Grande do Sul',
    'Santa Catarina',
    'Paraná',
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais', 
    'Espírito Santo',
    'Bahia',
    'Distrito Federal',
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul'
);

let counter = 0;
while (counter < 12){
    console.log(listaDeCapitais[counter]);
    if(listaDeCapitais[counter] == destino){
        console.log(`Destino escolhido pelo passageiro.`);
        break;
    } else {
        console.log(`Destino não selecionado.`)
    }
    counter += 1;
}

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

if (podeComprar == true){
    console.log(`Boa viagem ${firstName} ${lastName}`);
} else {
    console.log(`Você precisar estar acompanhado para viajar.`)
}




















// const idade = 15;

// if (idade >= 18){
//     console.log('Pode dirigir.');
// }
// else {
//     console.log('Não pode dirigir');
// }

// const destino = 'lua';

// if (destino == 'estado'){
//     console.log(listaDeEstados);
// } else if (destino =='capitais') {
//     console.log(listaDeCapitais);
// } else {
//     console.log('Error');
// }