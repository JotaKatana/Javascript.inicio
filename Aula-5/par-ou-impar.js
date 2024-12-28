const lista_number = [25, 88, 71, 192, 333, 222, 10, 11, 62] //-> Lista de numeros
const lista_pares = [] //--> Temos métodos para manipular e modificar essa lista
const lista_inpares = []

let indice_number = 0 //--> para o contador, uso para ele limitar o loop apenas na quantidade de valores da lista

while (indice_number < lista_number.length) {
//---> Vou verificar a lista de numero e o numero do contador para verificar
    if (lista_number[indice_number] % 2 === 0) { //--> Vou verificar se o numero é divisiel por 2 e se vai dar resto === 0
        lista_pares.push(lista_number[indice_number]) //--> Push = Permite que eu acrescente um valor a lista
    }
    else { //--> Se não é par ele é impar
        lista_inpares.push(lista_number[indice_number]) //--> Vou adicionar na minha lista dos impares
    }
    indice_number += 1
}

console.log("Numeors Pares:", lista_pares)
console.log("Numeors Impares:", lista_inpares)


