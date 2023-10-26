// funcao que ao carregar o html e verifica se o acesso é true
document.addEventListener("DOMContentLoaded", function () {
  const estadoAcesso = localStorage.getItem("acesso");
  if (estadoAcesso == "false" || estadoAcesso == null) {
    alert("Você precisa primeiro fazer o login, retornando a pagina de login");
    window.location.href = "../Login/home.html";
  }
});

// Definindo a chave da API
const apiKey = "827b9f42a35b0af9fa85bd2da064b005";

// Selecionando elementos HTML por seus IDs
const inputCidade = document.querySelector("#cidade"); // Obtém o elemento de entrada de cidade
const botaoProcurar = document.querySelector("#procurar"); // Obtém o botão de pesquisa
const cidadeElemento = document.querySelector("#city"); // Obtém o elemento que exibirá o nome da cidade
const containerClima = document.querySelector("#dadosClima"); // Obtém o elemento que conterá os dados do clima
const temperaturaElemento = document.querySelector("#Temperatura");
const umidadeElemento = document.querySelector("#Umidade");
const ventoElemento = document.querySelector("#Vento");
const cidadeErro = document.getElementById("cidadeErro"); //pegando a div vazia da cidadeErro

// Esta função buscarDadosClima é uma função assíncrona que recebe um parâmetro 'city'.
const buscarDadosClima = async (city) => {
  // Cria a URL da API de previsão do tempo usando a cidade fornecida, unidades métricas, sua chave de API e o idioma português brasileiro.
  const apiClimaURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  // Faz uma solicitação assíncrona para a URL da API usando a função fetch e armazena a resposta em 'res'.
  const resposta = await fetch(apiClimaURL);

  // Converte a resposta em formato JSON e armazena os dados em 'dados'.
  const data = resposta.json();

  return data;
};

// Função para mostrar os dados climáticos
const mostrarDadosClimaticos = async (city) => {
  const dados = await buscarDadosClima(city); // Chama uma função para obter dados climáticos da API

  if (dados.name) {
    // Preencher os elementos HTML com os dados obtidos da API
    cidadeElemento.textContent = dados.name; // Nome da cidade

    temperaturaElemento.textContent = ` Temperatura: ${parseInt(
      dados.main.temp
    )}ºC  🌡️`; // Parse transforma o inteiro em string
    umidadeElemento.textContent = `Umidade do ar: ${dados.main.humidity}%  💧`;

    ventoElemento.textContent = `Velocidade do vento: ${dados.wind.speed}km/h 💨`;

    containerClima.classList.remove("hide"); // Mostra o contêiner de dados climáticos
    cidadeErro.textContent = ""; // para remover a mensagem de erro da cidade
    containerClima.style.display = "block"; // exibe o contêiner de dados climáticos
  } else if (cidadeErro) {
    // Se o nome da cidade não for válido, você pode lidar com isso aqui
    cidadeErro.textContent = "Nome da cidade inválido!"; // exibe a mensagem de erro da cidadeErro
    containerClima.classList.add("hide"); // esconde o contêiner de dados climáticos
    containerClima.style.display = "none"; // também esconde o contêiner de dados climáticos
    // Ou mostrar uma mensagem de erro ao usuário, ou tomar alguma outra ação apropriada.
  }
};

// Adiciona um evento de clique no elemento com o ID "botaoProcurar"
botaoProcurar.addEventListener("click", async (e) => {
  e.preventDefault(); // Evita o comportamento padrão de um clique em um botão, que é recarregar a página

  // nesta função, quando a gente clica no botão pesquisar, enviamos a informação que está no input para a API

  const cidade = inputCidade.value; // Obtém o valor inserido no elemento com o ID "inputCidade"

  mostrarDadosClimaticos(cidade); // Chama a função mostrarDadosClimaticos com o nome da cidade como parâmetro
});

// função que quando clicar no button de sair ela pegar no local storage e dar o acesso como false
function acessoFalse() {
  localStorage.setItem("acesso", false);
}
