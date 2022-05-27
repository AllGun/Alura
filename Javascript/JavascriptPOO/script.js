document.write("Obrigado, entraremos em contato.");

function Enviar () {
    var nome = document.getElementById("nome-id");

    if(nome.value != " ") {
        alert(`Obrigado ${nome.value}, os seus dados foram encaminhados com sucesso.`)
    }
}