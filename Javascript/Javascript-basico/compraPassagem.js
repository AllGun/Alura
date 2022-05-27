console.log("\nVenda de passagens\n");

const listaDeDestinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro"
);

console.log(listaDeDestinos);

const nomePassageiro = "Tomas Eduardo Brady";
const idadeComprador = 17;
const estaAcompanhado = false;
const destino = "Salvador";
let temPassagemComprada = false;

console.log(temPassagemComprada);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;

console.log(podeComprar);