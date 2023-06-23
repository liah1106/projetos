function buscar() {
    var cep = document.getElementById('cep').value;
    alert(cep);
    var url = 'https://viacep.com.br/ws/'+cep+'/json/';

    fetch(url)
    .then(response => response.json())
    .then(data => {
        alert('funcionou');

if(data.erro){
    document.getElementById('resultado').textContent = 'CEP não encontrado!';
}else{
    document.getElementById('resultado').innerHTML = 
    '<strong> Cidade: </strong>' + data.localidade + '<br>'
    + '<strong> Cep </strong>' + data.cep + '<br>'
    + '<strong> Logradouro: </strong>' + data.logradouro + '<br>'
    + '<strong> Bairro: </strong>' + data.bairro +  '</br>'
    + '<strong> Complemento: </strong>' + data.complemento + '</br>'
    + '<strong> Estado: </trong>' + data.uf + '</br>'
    + '<strong> Código IBGE: </strong>' + data.ibge + '</br>';
}
    
 }).catch(error => alert('deu errado:' + error));

}