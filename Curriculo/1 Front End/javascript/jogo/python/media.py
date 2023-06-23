#entrada de dados
nota1 = float(input('Nota 1: '))
nota2= float(input('Nota 2: '))
nota3 = float(input('Nota 3: '))
nota4 = float(input('Nota 4: '))

media = ( nota1 +  nota2   + nota3  +  nota4 )/4

print(media)

if media < 60:
    print('Reprovado')
elif media > 70:
    print('Mediano')
elif media > 80:
     print('Muito Bom')   
else:
    print('Exelente')