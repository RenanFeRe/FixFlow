const cadastrar_btn = document.getElementById("cadastrar-btn");

// botão cadastrar
cadastrar_btn.addEventListener("click", (e) => {
  cadastro(e);
});

// função cadastrar novo usuário e pegar as informações do usuário
function cadastro(e) {
  e.preventDefault();

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const senha_Confi = document.getElementById("password-confirm").value;
  const role = document.querySelector('input[name="role"]:checked').value;

  if (senha != senha_Confi) {

    window.alert("senhas não são iguais");
  } else if (nome.length >= 15) {

    window.alert("nome muito grande");
  }
  else if (email.length <= 6) {

    window.alert("email inválido");
  } else {

    storage(nome, email, senha, senha_Confi, role);
  }
}

// função para guardar informações do usuário no localStorage
function storage (nome, email, senha, senha_Confi, role) {

  var userInfo = {
    "nome": nome,
    "email": email,
    "senha": senha,
    "senhaConf": senha_Confi,
    "role": role
  };

    var userText = JSON.stringify(userInfo);
    localStorage.setItem("userInfo", userText);

    if (role === "tecnico") {
      window.location.href = "technician/dashboard.html";

    } else {
      window.location.href = "client/dashboard.html";
    }
}
