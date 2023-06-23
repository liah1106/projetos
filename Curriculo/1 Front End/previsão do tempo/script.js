async function buscarClima(){
    var cidade = document.getElementById("cidade").value
    var chave = 'a2b3b40e21477ed8a6eca4741321b4f8';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' +cidade+ '&appid='+chave+'&units=metric';

    try{
        var resposta = await fetch(url);
        var dado = await resposta.json();

      var resultado = document.getElementById("resultado");
      resultado.innerHTML =
      '<h2 class="tempo"> Previsão de Tempo Para'+ dado.name +' </h2>'
      +'<p><b> Temperatura: ' + dado.main.temp + 'C° '
      +'<p> Temperatura Máxima: '+ dado.main.temp_max +' C°'
      +'<p> Temperatura Mínima: '+ dado.main.temp_min +' C°'
      +'<p> Temperatura Ambiente: '+ dado.main.feels_like+' C°'
      +'<p> Humidade: '+dado.main.humidity+' %'
      +'<p> Velocidade do vento: '+dado.wind.speed+' Km/h'
      +'<p> Nuvens: '+dado.clouds.all+' %'
      +'<p> Condição: '+dado.weather[0].description+'</b></p>'
      + '<img  class="imgTempo"src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">'

    }catch(error){
       var resultado = document.getElementById("resultado");
       resultado.innerHTML = "<p>Erro ao buscar o clima:"+error+"</p>";
    }
}
