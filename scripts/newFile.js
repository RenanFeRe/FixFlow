const { cadastrar_btn, storage } = require("./cadastro");

cadastrar_btn.addEventListener("click", () => {

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const senha_Confi = document.getElementById("password-confirm").value;
  const role = document.querySelector('input[name="role"]:checked').value;

  if (senha === senha_Confi) {

    storage(nome, email, senha, senha_Confi, role);

  } else {

    window.alert("senhas não conferem");

  }
});
