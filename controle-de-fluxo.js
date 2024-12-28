const numero1 = 100
const numero2 = 20
const numeroCorreto = 30
const stringDeNumero = 30


if (numero1 > 1) {
    console.log(`Esse numero é maior que 1`)
}
if (numero1 > 200) {
    console.log("Esse número é maior que 200")
}
    else {
        console.log("Esse numero é menor ou que 200!") //---> Ele pode ser igual a 200
    }
if (numero2 <= numero1) {
    console.log(`${numero2} é menor ou igual que ${numero1}`)
}
if (numeroCorreto == stringDeNumero) {  //--> Igual não é de igualdade é de
    console.log("Os numeros são iguais em valor apenas (pode ter ocorrido coerções implicitas)")
}
if (numeroCorreto === stringDeNumero) {  //--> Igual não é de igualdade é de
    console.log("Os numeros são iguais em valor e tipo")
}