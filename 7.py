# Modele e implemente um método recursivo que calcule o somatório dos números contidos em um ArrayList de inteiros, passado como parâmetro.

# assinatura def somatorio(lista):
# Exemplo: somatorio([1,2,3,4,5]) = 15

# caso base: se a lista estiver vazia, retorne 0
# caso recursivo: some o primeiro elemento da lista com o somatório dos demais elementos
# caso de erro: se a lista for nula, retorne -1

def somatorio(lista):
    if len(lista) == 0:
        return 0
    else: 
        return lista[0] + somatorio(lista[1:])
    

print(somatorio([1,2,3,4,5])) # 15