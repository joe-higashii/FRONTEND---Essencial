class Casa {
    constructor(preco, area, cor) {
        this.preco = preco;
        this.area = area;
        this.cor = cor;
    }
}

tabelaDeCasas = document.querySelector("#tabelaDeCasas tbody")

const casa1 = new Casa(200000, 65, 'Azul')
const casa2 = new Casa(100000, 250, 'Cinza')
const casa3 = new Casa(150000, 400, 'Lilas')

const casas = []
casas.push(casa1)
casas.push(casa2)
casas.push(casa3)

console.log(casas)

function alterarTabela(casas) {
    // Limpar a minha tabela
    tabelaDeCasas.textContent = ''

    casas.forEach(el => {
        // criando os elementos
        let tr = document.createElement('tr')

        let tdPreco = document.createElement('td')
        
        let tdArea = document.createElement('td')

        let tdCor = document.createElement('td')

        let tdLink = document.createElement('td')

        // preenchendo os elementos com as informações
        tdPreco.innerHTML = `<p>${el.preco}<p>`
        tdArea.textContent = el.area
        tdCor.textContent = el.cor
        tdLink.innerHTML = `<a href="./paginaTeste.html"></a>`

        // Adicionando os elementos filhos ao seu pai
        tr.appendChild(tdPreco)
        tr.appendChild(tdArea)
        tr.appendChild(tdCor)
        tr.appendChild(tdLink)

        tabelaDeCasas.appendChild(tr)
    })
}

alterarTabela(casas)

function mudarPagina() {
    window.open('paginaTeste.html', '_self')
}