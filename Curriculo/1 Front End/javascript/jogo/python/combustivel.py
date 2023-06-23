precoAlcool = float(input("Insira o valor do alcool: "))
precoGasolina = float(input("Insira o valor da Gasolina: "))

resultado = precoAlcool / precoGasolina
print(resultado)

if resultado > 0.7:
    print("abasteça com gasolina")
else:
    print("abasteça com alcool")