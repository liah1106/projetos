#algoritimo que faz tabuada de número
numero = int(input("Insira um número para a tabuada: "))
def multiplicar(numero):
   for i in range(0,11):
       print(numero , "x" , i , "=" , numero*i )
    
multiplicar(numero)

def verificarPar(numero):
    if numero % 2 == 0:
        print("É um número par")
    else:
        print("É um número impar")
        
verificarPar(numero)