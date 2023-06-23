function buscar(){
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');

    fetch('https://api.coingecko.com/api/v3/simple/price?ids='+seletor+'&vs_currencies=brl')
    .then(response => response.json())
    .then(data => {

        var preco = data[seletor].brl;
        resultado.textContent = formatar(preco);
        mudarImagem(seletor);

    }).catch(error => resultado.textContent = error);
}

function formatar(valor){
    valor = Number(valor).toFixed(2).replace('.',',');
    valor = "R$" +valor
     return valor;

}

function mudarImagem(seletor){
    var moeda = document.getElementById('imagem');

    if(seletor == "bitcoin"){
    moeda.innerHTML = '<img width="150" src="https://www.freepnglogos.com/uploads/bitcoin-png/bitcoin-futures-options-trading-for-risk-management-cme-group-18.png">'

  }else if(seletor == "ethereum"){
    moeda.innerHTML = '<img width="150" src="https://www.krunk.eu/wp-content/uploads/2021/06/Ethereum-back.png">'

  }else if(seletor == "litecoin"){
    moeda.innerHTML = '<img width="150" src="https://brisbanebullion.com.au/images/thumbs/0013202_litecoinobverse.png">'

  }else if(seletor == "dogecoin"){
    moeda.innerHTML = '<img width="150" src="https://global-uploads.webflow.com/5ef503b9dcd722d7cc5424e7/638110ae72bd57f9de7bf1f1_DC_INT_2.webp">'
  }
  
}
