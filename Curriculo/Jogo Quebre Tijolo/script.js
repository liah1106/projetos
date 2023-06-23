var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");


var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 7;



var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height -30; 
var bolaDX = 2;  //a bola vai para os lados 
var bolaDY = -2;  // a bola vai para cima e para baixo


var setaDireita = false;
var setaEsquerda = false;

document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    if(tecla.key === "Right" || tecla.key === "ArrowRight"){
       setaDireita = true;

    }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){ 
        setaEsquerda = true;

    }
}
function subirDaTecla(){

}

function desenharRaquete(){
    desenho.beginPath();              //inicia desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "purple";
    desenho.fill();
    desenho.closePath();
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();

    if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
        raqueteX = raqueteX + velocidadeRaquete;

    }else if(setaEsquerda && raqueteX > 0){
        raqueteX = raqueteX - velocidadeRaquete;
    }

    requestAnimationFrame(desenhar) //atualizar tela de forma suave
}
desenhar(); //chama função desenhar
