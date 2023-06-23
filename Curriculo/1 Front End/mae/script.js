var frase = "Mãe, de todas as vidas que eu poderia ter, te daria todas elas! ";

function gerarFrase(){

var texto = document.getElementById("frase");
texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}