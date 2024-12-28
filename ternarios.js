const idade = 19
const temCNH = true
//let Numeropassageiros = 0

const pode_dirigir = idade > 18 && temCNH

if (pode_dirigir) {
    console.log("Pessoa está habilitada para conduzir veículo")
}
else {
    console.log("Pessoa não está habilitada para conduzir veículo")
}

//let Numeropassageiros

let Numeropassageiros = pode_dirigir ? 4 : 0 //--> Se ela puder dirigir comporta até 4 passageiros, se não é 0

//if (pode_dirigir) {
//    Numeropassageiros = 4
//}
//else {
//    Numeropassageiros = 0
//}


console.log(`Número de passageiros: ${Numeropassageiros}`)