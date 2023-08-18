class Livro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }
}

    class gerenciamento {
        constructor(){
            this.livros = [];
            this.formulario =document.getElementById('formulario');
            this.listagem = document.getElementById('listagem');


            this.formulario.addEventListener('submit', this.adicionar.bind(this));


        }
        adicionar(event){
            alert('teste');
            event.preventDefault();
            var titulo = document.getElementById('titulo').value;
            var autor = document.getElementById('autor').value;
            var livro = new Livro(titulo, autor);
            this.livros.push(livro);

            this.exibirTela();
            titulo.value = '';
            autor.value = '';
        }


        exibirTela(){
        this.listagem.innerHTML = '';
            for(var i=0; i < this.livros.length; i++ ){
                var livro = this.livros[i];
                var li = document.createElement('li');
                li.textContent = livro.titulo + ' por ' + livro.autor;
                this.listagem.appendChild(li);
            }

            }
           
    }

    var gerencia = new  gerenciamento();
