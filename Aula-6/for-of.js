const lista_number = [33, 131, 155, 555, 222, -21, -56]
const users = ["José", "Antonio"]

//Código imperativo (mais facil pra máquina entender)

// for (let contador = 0; contador < lista_number.length; contador += 1 ) {      //--> ou contador += 1 ou Contador++
    //--> Da onde eu quero partir e colocar um limite < 100, C++ = forma de fazer um incremento pode por " "
//  console.log(lista_number[contador])
// }

//Código Declarativo (mais facil pra gente entender)

for (let elemento of lista_number) { //==> Estou dizendo, quero um numero da lista de numeros
    console.log (elemento)
}

for (const usuarios of users) {
    console.log(usuarios)
} 