function atualizar(){
    var data = new Date();

    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    hora = (hora < 10 ? "0" + hora : hora); 
    minuto = (minuto < 10 ? "0" + minuto : minuto); 
    segundo = (segundo < 10 ? "0" + segundo : segundo); 

    document.getElementById("hora").innerHTML= hora + ":" + minuto + ":" + segundo;
    //Relógio analógico
    var ponteiroHora = document.getElementById("ponteiroHora");
    var ponteiroMin = document.getElementById("ponteiroMin");
    var ponteiroSeg = document.getElementById("ponteiroSeg");

    var anguloHora = (hora % 12) * 30 + minuto * 0.5; 
    var anguloMinuto = minuto * 6;
    var anguloSegundo = segundo * 6;

    ponteiroHora.style.transform = 'rotate('+anguloHora+'deg)';
    ponteiroMin.style.transform = 'rotate('+anguloMinuto+'deg)';
    ponteiroSeg.style.transform = 'rotate('+anguloSegundo+'deg)';
}

setInterval(atualizar, 1000)