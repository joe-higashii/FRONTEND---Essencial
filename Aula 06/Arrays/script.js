let meuVetor = [19, "Joedson", ["texto1", "texto2"], true]

let idades = [18, 19, 17, 17, 18, 30]

idades.forEach(idade => {
    console.log(idade)
})

for (let i=0; i < idades.length; i++) {
    console.log(idades[i])
}

console.log(idades.join(', '))

//MAP, FILTER, REDUCE

const idadesPor2 = idades.map(el => el*2)
console.log(idadesPor2.join(', '))

const maioresDeIdade = idades.map(el => el > 18)
console.log(maioresDeIdade.join(', '))

//FILTER

const maiorIdadeFiltrado = idades.filter(el => el > 18)
console.log(maiorIdadeFiltrado.join(', '))

//REDUCE

const somaIdades = idades.reduce((acumulador, elemento) => {
    return acumulador + elemento
}, 0)

console.log(somaIdades)
let mediaIdades = somaIdades/idades.length
console.log(mediaIdades.toFixed(2))