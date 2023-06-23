$(window).scroll(function(){

    var posicao = $(this).scrollTop();
    $(".aviao").css({
        'right': posicao / 4 + '%'
    });

});

document.getElementById("busca").addEventListener("keyup", function(){ 

    var entrada = this.value.toLowerCase();
    var cartoes = document.getElementsByClassName("card");

    for (var i=0; i < cartoes.length; i++){
        var nome = cartoes[i].getAttribute("data-name").toLowerCase();

        if(nome.indexOf(entrada) > -1){
            cartoes[i].style.display = "";
        } else{
            cartoes[i].style.display = "none"; 
        } 
    }
});