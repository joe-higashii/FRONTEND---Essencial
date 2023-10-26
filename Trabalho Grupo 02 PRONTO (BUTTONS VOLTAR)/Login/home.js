if (localStorage.getItem("acesso") === "true") {
  window.location.href = "../paginaPrincipal/paginaPrincipal.html";
}

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

// função para gravar o login e senha do cliente
function gravaLogin() {
  const inputEmail = document.getElementsByName("email")[0].value;
  const inputSenha = document.getElementsByName("pwd")[0].value;
  const inputCheck =
    document.getElementsByClassName("form-check-input")[0].checked;

  const modeloLogin = {
    email: inputEmail,
    senha: inputSenha,
  };

  if (inputCheck === true)
    localStorage.setItem("Login", JSON.stringify(modeloLogin));
  else localStorage.removeItem("Login");
}
// Verifivcar de o email e senha estão corretos
function verificarlogin() {
  // pegando o email e senha
  const inputEmail = document.getElementsByName("email")[0].value;
  const inputSenha = document.getElementsByName("pwd")[0].value;

  // pegando a lista de clientes
  const arrayClientes = JSON.parse(localStorage.getItem("Clientes"));

  // buscando pelo cliente
  const clienteEncontrado = arrayClientes.find(
    (user) => user.email === inputEmail && user.senha === inputSenha
  ); //true|false                    //and

  if (clienteEncontrado) {
    localStorage.setItem("acesso", true);
    return true;
  } else {
    alert("Usuário ou Senha incorreto");
  }
  return false;
}
