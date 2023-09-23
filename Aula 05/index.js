// // console.log("Olá Mundo")


// // var nome = "Joedson"
// // let nome1 = "Joedson"
// // const nome2 = "Joedson"

// // function exemploVar() {
// //     if (true) {
// //         var x = 10
// //     }
// //     console.log(x)
// // }

// // exemploVar()

// let titulo = document.getElementById("titulo")
// console.log(titulo)

// titulo.textContent = "Alterei"

// let botao = document.getElementById("btn")
// console.log(btn)

// function alterarDiv() {
//     console.log('ola')
//     const div = document.querySelector("#minhaDiv")
//     div.textContent
// }

// botao.addEventListener('click', (e) => {
//     e.preventDefault()
//     alterarDiv()
// })

let botao = document.getElementById("btnSubmit")

botao.addEventListener('click', (e) => {
    e.preventDefault()
    let div = document.getElementById("conteudo")
    let email = document.getElementById("email").value
    let senha = document.getElementById("pwd").value

    div.textContent = `O seu email é: ${email}`
    div.style.backgroundColor = "red"
    div.style.color = "white"

    console.log(`meu email tem ${email.length} letras`)
    const nomeNovo = email.replace("alberto", "carlos")
    console.log(nomeNovo)

    console.log(div)
    console.log(email)
    console.log(senha)
})

let textoInteiro = "10"
let inteiro = parseInt(textoInteiro)
let float = parseFloat(10.2)
console.log(textoInteiro)
console.log(inteiro)
console.log(float)
console.log(textoInteiro*2)

// function clicar() {
//     event.preventDefault()
//     window.alert('cliquei')
//     let div = document.getElementById('conteudo')
//     let email = document.getElementById("email")
//     let senha = document.getElementById("pwd")

//     console.log("conteudo")
//     console.log("email")
//     console.log("pwd")
// }

let num1Texto = "10"
let num1 = 10

if (num1Texto != num1) {
    console.log('sou igual')
} else {
    console.log('nao sou igual')
}

const numeros = [1, 2, 3, 4, 5]

numeros.push(10)
numeros.splice(0, 3, 10)
console.log(numeros)

for (let i=0; i < numeros.length; i++) {
    console.log(i)
}

numeros.forEach(num => {
    console.log(num)
})
