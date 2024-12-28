const nome_users = ["Joana", "Renata", "Cleber", "Zeca", "Carla"] //--> Lista de usuários

// console.log("Olá", nome_users[0]) //--> Joana
// console.log("Olá", nome_users[1]) //--> Renata
// console.log("Olá", nome_users[2]) //--> Cleber
// console.log("Olá", nome_users[3]) //--> Zeca

//--> Preciso de uma váriavel para me dizer quando parar
let IndiceUsers = 0 
const IndiceAtual = 10//--> Se eu estourar o numero de usuário ele da como indefinido
//const IndiceAtual = nome_users.length //--> o length (Pega o tamanho atual da lista)
console.log({IndiceAtual})

while (IndiceUsers < IndiceAtual) { //--> Enquanto a variavel que quero inicial for menor que a qtd de vezes que deve rodar, eu quero exibir algo
    console.log("Olá", nome_users[IndiceUsers]) //--> como definimos o rodou vai iniciari assim ("Ola" users [0]), ("Olá" users [0+1])....
    IndiceUsers = IndiceUsers + 1  //--> Cada vez que esse loop fizer ele vai adicionar +1 ao rodou (0+1, 1+1, 2+1...)
    IndiceUsers += 1 //--> Exatamente a mesma coisa de cima (indice + 1 )
}                     //--> Estou atribuindo informações, NÃO É IGUALDADE