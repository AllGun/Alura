let firstName = 'Alfredo';
let midName = 'Gutemberg';
let lastName = 'Pereira';
let idade = 36;

if (idade >= 18) {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Você é obrigado a votar.\n`);
} else if (idade < 18 && idade >= 10) {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Votar é opcional para você.\n`);
} else {
    console.log(`Você ainda não pode votar.\n`);
}

firstName = 'Diego';
midName = 'de Souza';
lastName = 'Gutemberg';
idade = 11;

if (idade >= 18) {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Você é obrigado a votar.\n`);
} else if (idade < 18 && idade >= 10) {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Votar é opcional para você.\n`);
} else {
    console.log(`Você ainda não pode votar.\n`);
}

firstName = 'Ana Júlia';
midName = 'da Silva';
lastName = 'Gutemberg';
idade = 5;

if (idade >= 18) {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Você é obrigado a votar.\n`)
} else if (idade < 18 && idade >= 10) {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`);
    console.log(`Votar é opcional para você.\n`);
} else {
    console.log(`Nome: ${firstName} ${midName} ${lastName}`);
    console.log(`Idade: ${idade}`)
    console.log(`Você ainda não pode votar.`);
}
