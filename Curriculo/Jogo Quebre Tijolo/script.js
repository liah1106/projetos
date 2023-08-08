//definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar rebatedor
var raqueteAltura = 7;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 7;
 

//configurar a bola
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 4;
var bolaDY = -4;

var tijolosPorLinha = 5;
var tijolosPorColuna = 6;
var tijolosLargura = 75;
var tijolosAltura = 10;
var tijolosEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = [];

var totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
var pontuacao = 0;

function facil(){
   raqueteLargura = 70;
   tijolosPorLinha = 2;
   tijolosPorColuna = 5;
   tijoloLargura = 90;
   tijoloAltura = 40;
   bolaRadius = 20;
   bolaDX = 2;
   bolaDY = -1;
   totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
   pontuacao = 0;
   bolaX = canvas.width / 2;
   bolaY = canvas.height - 30;
   iniciarTijolos();
}


function medio(){
    raqueteLargura = 70;
    tijolosPorLinha = 4;
    tijolosPorColuna = 7;
    tijoloLargura = 80;
    tijoloAltura = 40;
    bolaRadius = 10;
    bolaDX = 4;
    bolaDY = 4;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30;
    iniciarTijolos();
 }


 function dificil(){
    raqueteLargura = 50;
    tijolosPorLinha = 5;
    tijolosPorColuna = 6;
    tijoloLargura = 80;
    tijoloAltura = 40;
    bolaRadius = 10;
    bolaDX = 5;
    bolaDY = 5;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30;
    iniciarTijolos();
 }

 function impossivel(){
    raqueteLargura = 60;
    tijolosPorLinha = 6;
    tijolosPorColuna = 7;
    tijoloLargura = 80;
    tijoloAltura = 40;
    bolaRadius = 10;
    bolaDX = 7;
    bolaDY = 7;
    totalPontuacao = tijolosPorLinha * tijolosPorColuna * 10;
    pontuacao = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30;
    iniciarTijolos();
 }


function iniciarTijolos(){
    for(var coluna=0; coluna< tijolosPorColuna; coluna++ ){
        tijolos[coluna] = []
    
        for(var linha=0; linha < tijolosPorLinha; linha ++){
    
            tijolos[coluna][linha] = {x:0, y:0, ativo:1 }
        }
    }
    
}
iniciarTijolos();
 
var setaDireita = false;
var setaEsquerda = false;
 
document.addEventListener("keydown", descerDaTecla);                                                                          
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla){
    if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
        setaDireita = true;
     }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
        setaEsquerda = true;
        }

    }
    function subirDaTecla(tecla){
        if(tecla.key === "Right" || tecla.key === "ArrowRight" ){
            setaDireita = false;
         }else if(tecla.key === "Left" || tecla.key === "ArrowLeft"){
            setaEsquerda = false;
         }
    }


function desenharRaquete(){
    desenho.beginPath();
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();
    
}
function desenharBola(){
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "white";
    desenho.fill();
    desenho.closePath();
}
function desenharTijolos(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha ++){

            if(tijolos[coluna][linha].ativo == 1){
                
                var tijoloX = (coluna * (tijolosLargura + tijolosEspacamento)+ espacamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijolosAltura + tijolosEspacamento)+ espacamentoSuperiorQuadro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijolosLargura, tijolosAltura);
                desenho.fillStyle = "blue";
                desenho.fill();
                desenho.closePath();


                

            }
        }
    }
}

function detectarColisao(){
    for(var coluna=0; coluna < tijolosPorColuna; coluna++){
        for(var linha=0; linha < tijolosPorLinha; linha++){

            var tijolo = tijolos[coluna][linha];

            if(tijolo.ativo === 1){

                if(bolaX > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijolosLargura
                    && bolaY + bolaRadius > tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijolosAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
                        tela = document.getElementById("ponto");
                        pontuacao = pontuacao + 10;
                        tela.innerHTML = "Score: "+ pontuacao;
                        gerarEfeitoSonoro('moeda.mp3');
                        

                        if(pontuacao === totalPontuacao){
                            vitoria();
                        }
                    }
                }
            }
        }
    }

    contador = 0;

function gameover(){
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";

    if(contador < 1){
        gerarEfeitoSonoro('gameover.mp3')
    }
       
    bolaDX = 0;
    bolaDY = 0;

    contador = contador + 1;

}

function reiniciar(){
    document.location.reload();

}
function vitoria(){
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    gerarEfeitoSonoro('vitoriaa.mp3')

    bolaDX = 0;
    bolaDY = 0;
}

function gerarEfeitoSonoro(som){
    var contexto = new (window.AudioContext)();
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET',som,true);
    requisicao.responseType = 'arraybuffer';

    requisicao.onload = function(){ 
        contexto.decodeAudioData(requisicao.response, function( buffer ){ 
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            fonte.connect(contexto.destination);
            fonte.start(0);
         });
    }
    requisicao.send();
}

function desenhar(){
    desenho.clearRect(0 ,0, canvas.width, canvas.height);
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        
        bolaDX = -bolaDX;
        gerarEfeitoSonoro('lateral.mp3');
    }

    if(bolaY + bolaDY < bolaRadius){

        bolaDY = -bolaDY;
        gerarEfeitoSonoro('lateral.mp3');

    } else if(bolaY + bolaRadius + bolaDY > canvas.height - bolaRadius){

        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;

            }else{

                gameover();
            }
        }

        if(setaDireita === true && raqueteX < canvas.width - raqueteLargura){
            raqueteX = raqueteX + velocidadeRaquete;
    
        }
        else if(setaEsquerda === true && raqueteX > 0){
            raqueteX = raqueteX - velocidadeRaquete;
        }
        bolaX = bolaX + bolaDX;
        bolaY = bolaY + bolaDY;

        requestAnimationFrame(desenhar)

    }

 
    





desenhar(); 
