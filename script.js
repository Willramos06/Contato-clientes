//Variavies de escopo global - que vão ser usadas em todo código

const form = document.getElementById('formulary')
const formRemocao = document.getElementById('form-remocao')
let linhas = '';
const contatos = [];
const numeros = [];


//Ação tomada assim que o botão dentro do form for apertado
form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-do-contato');
    const inputNumeroContato = document.getElementById('numero-do-contato');   

    //if para não permitir atividades iguais
    if ((numeros.includes(inputNumeroContato.value))){

        alert(`O numero: ${inputNumeroContato.value} já foi adicionado.`) 
    } else{
        
        //Aqui será concatenado dentro da váriavel linha vários valores diferentes
    
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`
        linha += `<td> ${inputNumeroContato.value}</td>`
        linha += '</tr>'
        linhas += linha 
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    //Aqui adicionamos o valor de linhas no HTML
    corpoTabela.innerHTML = linhas;
}

function removeLinha() {
    const inputRemoverNumero = document.getElementById('numero-remocao');
    const numeroParaRemover = inputRemoverNumero.value;
    const indice = numeros.indexOf(numeroParaRemover);

    if (indice > -1) {
        // Remove o contato e o número das arrays
        contatos.splice(indice, 1);
        numeros.splice(indice, 1);

        // Reconstrói as linhas
        linhas = '';
        for (let i = 0; i < contatos.length; i++) {
            let linha = '<tr>';
            linha += `<td> ${contatos[i]}</td>`
            linha += `<td> ${numeros[i]}</td>`
            linha += '</tr>'
            linhas += linha;
        }

        // Atualiza a tabela
        atualizaTabela();
    } else {
        alert(`O número: ${numeroParaRemover} não foi encontrado.`);
    }

    inputRemoverNumero.value = '';
}

