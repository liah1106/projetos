//alert('Olá Mundo');

var numero = -5;

if(numero  > 10 && numero < 20){
    alert('numero maior que 10');
}else if(numero < 0){
     //alert('numero menor que 10');

    // alert('numero inválido');
}else{
    // alert('menor que 10');
}

var contador = 0;

//enquanto contador for menor que 5 executa
while(contador < 5){

    //alert('Numero: '+ contador)
    contador = contador + 1;
}

//criação de lista - Fulano 0, Ciclano 1, Deltrano 2
var nomes = ['Fulano','Ciclano','Deltrano'];
//alert(nomes[0]);

//nomes.lenght = 3
for(contador=0; contador < nomes.length; contador++){
    //alert(nomes[contador]);
}

if(nomes[contador] ==='Ciclano'){
    //alert('Pesooa Encontrada!')
}

//fução
function baixarEstoque(){
    alert("Baixou Estoque!");
}

function movimentarCaixa(){
    alert("Caixa movimentado");
}

//fazer venda
function fazerVenda(){
baixarEstoque();
movimentarCaixa();

//DOM -
var titulo = document.getElementById('texto');
titulo.innerHTML = 'novo texto';
}

//objeto
var pessoa = { idade:17, nome: 'Gabriel Henrique', altura:1.65};
alert(pessoa.nome);