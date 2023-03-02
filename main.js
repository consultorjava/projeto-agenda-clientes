const form = document.getElementById('form-agenda');
const nomesClientes = [];
const telefone = [];


let linhas = '';

form.addEventListener('submit', function(e){
   e.preventDefault();

   adicionaLinhas();
   atualizaTabela();
   atualizaQuantidadeTotal();


});


function adicionaLinhas(){
    const inputNomeCliente = document.getElementById('nome-cliente');
    const inputTelefoneCliente = document.getElementById('telefone-cliente');

    if(nomesClientes.includes(inputNomeCliente.value)){
        alert(`Esse Cliente: ${inputNomeCliente.value} já foi inserido na tabela`);
    }else{
        nomesClientes.push(inputNomeCliente.value);
        telefone.push(inputTelefoneCliente.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeCliente.value}</td>`;
        linha += `<td>${inputTelefoneCliente.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }    

    inputNomeCliente.value = '';
    inputTelefoneCliente.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaQuantidadeTotal(){
    document.getElementById('total-agendamentos').innerHTML = nomesClientes.length;
}

