//SEM ORIENTAÇÃO A OBJETOS
var nome1 = 'Paula';
var nome2 = 'Juliana';
var nome3 = 'Alana';

var idade1 = 23;
var idade2 = 31;
var idade3 = 20;

function falar(nome, idade){
   alert('Sem Orientação a objetos: Olá sou '+ nome +' e tenho '+ idade +' anos');
}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);

//COM ORIENTAÇÃO A OBJETOS
//Classe
class Pessoa {
     constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
     }
     falar(){
       alert("Pessoa criada: Olá meu nome é "+this.nome+" e tenho "+this.idade + " anos")
   }
}
//Instanciando Objeto
var pessoa1 = new Pessoa('Astolfo', 71);
var pessoa2 = new Pessoa('Malvina', 50); 
var pessoa3 = new Pessoa('Muriel', 60);
pessoa1.falar();
pessoa2.falar();
alert('Olá' +pessoa3.nome);

//Herança e Polimorfismo
class Animal{
   construtor(nome){
      this.nome = nome;
   }
   fazerBarulho(){
      alert("Fazendo barulho genérico");
   }
}
class Cachorro extends Animal {
   constructor(nome, raca){
      super(nome);
      this.raca = raca;
   }
   fazerBarulho(){
      alert("Cachorro Latindo!")
   }
}
class Gato extends Animal {
   constructor(nome, cor){
      super(nome);
      this.cor = cor;
   }
   fazerBarulho(){
      alert("Gato Miando!")
   }

} 

var objetoCachorro = new Cachorro('Dextther', 'Husky Siberiano');
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho();

var objetoGato = new Gato('Chulinha', 'Tricolor');
alert(objetoGato.nome);
alert(objetoGato.cor);
objetoGato.fazerBarulho();


//Encapsulamento, modificador de acesso
class contaBancaria {
   constructor(saldo){
      this._saldo = saldo;
   }
   get obterSaldo(){
      return this._saldo;
   }
   depositar(valor){
      this._saldo = this._saldo + valor;
   }
   sacar(valor){
      if(valor <=this._saldo){
         this._saldo = this._saldo - valor;
      } else {
         alert("Valor maior que o saldo!")
      }
   }
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(100);
alert(minhaConta.obterSaldo);
minhaConta.sacar(10000);
alert(minhaConta.obterSaldo);