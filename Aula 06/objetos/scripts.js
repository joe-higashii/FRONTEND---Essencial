const pessoa = {
    nome: "Joedson",
    idade: 31,
    altura: 1.75,
    hobby: ['jogos', 'livros', 'filmes']
}

// JSON -> Javascript Object Notation
const json = 
{
    "nome": 'Joedson',
    "idade": 31,
    "altura": 1.75,
    "hobby": ['Jogos', 'Filmes']
}

{/* <nome>Joedson</nome>
<idade>31</idade>
<altura>1.75</altura>
<hobby>Jogos, Series</hobby> */}

const pessoa1 = {
    nome: 'Joedson',
    idade: 31,
    altura: 1.75,
    hobby: ['Jogos', 'Filmes']
}

const pessoa2 = {
    nome: 'Joedson',
    idade: 31,
    altura: 1.75,
    hobby: ['Jogos', 'Filmes']
}

const pessoa3 = {
    nome: 'Joedson',
    idade: 31,
    altura: 1.75,
    hobby: ['Jogos', 'Filmes']
}

let pessoas = []
pessoas.push(pessoa)
pessoas.push(pessoa1)
pessoas.push(pessoa2)

console.log(pessoas)

const idades = pessoas.map(el => el.idade)
console.log(idades)


const maiorDeIdade = pessoas.filter(el => el.idade > 18)
console.log(maiorDeIdade)

let carro1 = new Car("Ford", 2014)
let carro2 = new Car("Fiat", 2020)

carros = []
carros.push(carro1)
carros.push(carro2)

console.log(carros[0].nome)

carros.map(el => {
    new Car(el.nome, el.ano)
})