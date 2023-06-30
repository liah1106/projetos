var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar rebatedor
var raqueteAltura = 7;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2;
var velocidadeRaquete = 7;
 

//configurar a bola
var bolaRadius = 8;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 2;
var bolaDY = -2;

var tijolosPorLinha = 6;
var tijolosPorColuna = 8;
var tijoloLargura = 60;
var tijoloAltura = 20;
var tijoloEspacamento = 10;
var espacamentoSuperiorQuadro = 30;
var espacamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com o tijolos

for(var coluna=0; coluna < tijolosPorColuna; coluna ++){
    tijolos[coluna] = []
    
    for(var linha=0; linha < tijolosPorLinha; linha ++){
        tijolos[coluna][linha] = {x:0, y:0, ativo:1 }
    }
}
 
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
      for(var linha=0; linha < tijolosPorLinha; linha++){

        if(tijolos[coluna][linha].ativo == 1){

            var tijoloX = (coluna * (tijoloLargura + tijoloEspacamento)+ espacamentoEsquerdoQuadro);
            var tijoloY = (linha * (tijoloAltura + tijoloEspacamento)+ espacamentoSuperiorQuadro);

            tijolos[coluna][linha].x = tijoloX;
            tijolos[coluna][linha].y = tijoloY;

            desenho.beginPath();
            desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
            desenho.fillStyle = "green";
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
                    && bolaX < tijolo.x + tijoloLargura
                    && bolaY > tijolo.y
                    && bolaY < tijolo.y + tijoloAltura){
                        bolaDY = -bolaDY;
                        tijolo.ativo = 0;
            }
        }
    }
  }
}

function desenhar(){
    desenho.clearRect(0, 0, canvas.width, canvas.height);
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius){
        
        bolaDX = -bolaDX;

    }

    if(bolaY + bolaDY < bolaRadius){

        bolaDY = -bolaDY;

    } else if(bolaY + bolaDY > canvas.height - bolaRadius){

        if(bolaX > raqueteX && bolaX < raqueteX + raqueteLargura){

            bolaDY = -bolaDY;

            }else{

                document.location.reload();
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

        requestAnimationFrame(desenhar) //atualizar tela de forma suave

    }

 desenhar(); //chama função desenhar
