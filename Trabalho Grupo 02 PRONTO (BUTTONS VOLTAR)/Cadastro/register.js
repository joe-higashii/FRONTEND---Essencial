// array de clientes padrão
const clientes = [
  {
    id: 1,
    nome: "admin",
    email: "admin@email.com",
    senha: "12345678",
  },
];
// funcao que ao carregar o html ele cria o localStorage
document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.acesso) {
    localStorage.setItem("Clientes", JSON.stringify(clientes));
    localStorage.setItem("acesso", false);
  }
});

// funcao que ao dar submit do formulario, ele adiciona um novo cliente
function adicionarNovoCliente() {
  const inputNome = document.getElementsByName("nome")[0].value; //pegando o que eu digitar no nome
  const inputEmail = document.getElementsByName("email")[0].value; //pegando o que eu digitar no email
  const inputSenha = document.getElementsByName("pwd")[0].value; //pegando o que eu digitar na senha
  const inputConfirmaSenha = document.getElementsByName("cpwd")[0].value; //pegando o que eu digitar na confirmacaoSenha
  const divSenhaErro = document.getElementById("#senhaErro"); //pegando a div vazia do senha erro
  const divEmailErro = document.getElementById("#emailErro"); //pegando a div vazia do senha erro

  // fazer um copia do array de clientes na minha maquina
  const ArrayClientes = JSON.parse(localStorage.getItem("Clientes")); // Converte os elementos string da array em objetos.

  // verifica se o E-mail já está cadastrado
  const emailRepetido = ArrayClientes.find((user) => user.email === inputEmail); // se tiver email repetido é true
  if (emailRepetido) {
    // da o aviso que já existe esse email cadastrado
    divEmailErro.textContent = "*E-mail já existente";
    // não deixa o action do formulario acontecer
    return false;
  }

  // verifica se o confirma senha é igual a senha
  if (inputSenha !== inputConfirmaSenha) {
    // da o aviso que as senhas não são iguais =
    divSenhaErro.textContent = "*As senhas não são iguais";
    // não deixa o action do formulario acontecer
    return false;
  }

  // modelo de como vai subir um novo cliente pro LocalStorage
  const novoCliente = {
    id: ArrayClientes.length + 1,
    nome: inputNome,
    email: inputEmail,
    senha: inputSenha,
  };

  // pego a copia do array da minha maquina e adiciono um novo cliente
  ArrayClientes.push(novoCliente);

  //Array atualizado e manda pro LocalStorage
  localStorage.setItem("Clientes", JSON.stringify(ArrayClientes));

  // aviso ao cliente cadastrado
  alert("Novo cliente cadastrado com sucesso, retomando a pagina de Login");

  // da o return true para que la no formulario possa ocorrer o action  que e jogar o cliente para pagina de login
  return true;
}
