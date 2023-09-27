// Promise

// É um objeto Javascript com a promessa de que algo será realizado
// É usado para operações assíncronas

//  -  Carregar um arquivo (JSON, foto, etc)
//  -  Leitura de dados de uma API

//  -  Uma Promise possui 4 estágios
//  -  Pending: Estado inicial, assim que o objeto da promessa é iniciada
//  -  Fulfilled: A promessa foi concluida com sucesso
//  -  Rejected: A promessa foi rejeitada, houve algum erro
//  -  Settled: Seja com sucesso ou com erro, ela foi finalmente concluida

// console.log('pedir uber')

// const promessa = new Promise((resolve, reject) => {
//     return resolve('carro chegou')
// })

// console.log('aguardando')

// promessa.then(result => console.log(result))

// console.log('pedir uber')

// const promessa = new Promise((resolve, reject) => {
//     return reject('pedido negado')
// })

// console.log('aguardando')

// promessa
// .then(result => console.log(result))
// .catch(e => console.log(e))


// console.log('pedir uber')

// let aceitar = false
// const promessa = new Promise((resolve, reject) => {
//     if (aceitar) {
//         return resolve('carro chegou')
//     }
//     return reject('Pedido negado!')
// }) 

// console.log('aguardando')

// promessa
// .then(result => console.log(result))
// .catch(e => console.log(e))
// .then(d => console.log('finalizando pedido'))

function startRepo() {
    const response = fetch('https://api.github.com/users/joe-higashii').then(response => response.json())
    console.log(response)
    return response.json()
}

startRepo()