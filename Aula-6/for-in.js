const user = {
    name: "JoSÉ mARIa SOUsa santoS",
    email: "JOSE.M1@gmail.com",
    age: 23,
    address: "x Street"
}

// Quando devo usar for... Of? Quando for manipular arrays
// Quando devo usar For... In? Quando for manipular objetos

//Má prática, evite ao máximo usar for in com arrays


//---> Ao invés de aceesar algo por (animal.especie) usamos => (animal["especie"])

// Pegando cada um dos nomes etransformando em arwauys "palavras com virgulas"

for (const key in user) { //--> Para a key dentro de user
    if (key === "name") { //-> se key for igual ao name e ao email, o key dentro de user vai ser....
        const names = user[key].split(" ") //--> O split estou dizendo que quero dividi-lo onde tem espaços
        user[key] = "" //--> Deixei ele vazio, está aberto a receber informações

// Normalizando nome, primeir lower case "minusculo", desestruturando com "RESTOPERATOR"
        for (const name of names) { //--> Usando arways, quero botar apenas a primeira letra maiuscula
            const normalized_name = name.toLowerCase() ///--> Deixa tudo minusculo
            const [primeiraletra, ...restodonome] = normalized_name //--> Separa apenas as primeiras letras, os "..." serve par | posso por n elementos, ele retira primeira letra e dps o resto do nome como arway.

// Peguei oque inha antes, coloquei um espaço para acomodar a primeira letra do nome, coloca a primeira letra e coloca o resto do nome, o split tranfor uma string em um arway e o join transfroma um arway em string
             user[key] = user[key] + " " + primeiraletra.toLocaleUpperCase() + restodonome.join("")  //--> Defino que ele vai receber a primeira letra + o resto do nome
             user[key] = user[key].trim()  //--> Retira espaços indevidos do meu texto
            }                                                                //---> Junto dnv as letras com .join
        }
    if (key == "email") { //-> se key for igual ao name e ao email, o key dentro de user vai ser....
        user[key] = user[key].toLowerCase() //--> Vai ser toLowerCase = Tudo minusculo
    }
}

console.log(user)