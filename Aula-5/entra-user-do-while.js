const lista_phone = ["Paulo", "Selina", "Roger", "Rubens", "Zeca", "Josué", "Bianca", "Felipe"]
//--> Quero achar o User que começa com Z

let encontrou_users = false //--> Vai ser falso enquanto não achar usuários
let contador = 0 //--> Lista começa do 0 (Indice do Usuário)

do { //--> Isso continua enquanto ele não encontrar mais usuários
    const user_atual = lista_phone[contador] //--> Pode receber os nomes dos usuários
    if (user_atual && user_atual.startsWith("Z")) { //--> Comece com tal letra....Se a primeira lera for igual a que eu defini vai ser true
    encontrou_users = true
    console.log(`Usuário encontrado: ${user_atual}`)
    }
    contador += 1

    if (contador >= lista_phone.length) {  //--> Atribuição
        encontrou_users = true //-> Encontrou o usuário ou percoreu a lista inteiro
        console.log("Usuário não foi encontrado")
    }
} while (!encontrou_users)

