console.log("Funções")

function multiplicar(num1, num2) {
    return num1 + num2
}

console.log(multiplicar(2, 2))

const soma = function (num1, num2) {
    return num1 + num2
}

console.log(soma(2, 3))

const numeros = [1, 2, 3, 4, 5]
console.log(numeros)

numeros.push(10)

console.log(numeros)

console.map(numero => numero*2)

let hello = function() {
    console.log('ola')
}

hello = () => {
    alert('ola')
}