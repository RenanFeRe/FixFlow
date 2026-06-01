const cadastrar_btn = document.getElementById("cadastrar-btn");

//pegar as informações do usuário
cadastrar_btn.addEventListener("click", () => {

  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;
  const senha_Confi = document.getElementById("password-confirm").value;
  const role = document.querySelector('input[name="role"]:checked').value;

  if (senha === senha_Confi) {
    
    storage(nome, email, senha, senha_Confi, role);
    
  } else if (nome >= 15) {

    window.alert("nome muito grande");
  }
  else if (email.length <= 6) {
    
    window.alert("email inválido");
  } else {
    
    window.alert("senhas não são iguais");
  }
});

// função para guardar informações do usuário no localStorage
function storage (nome, email, senha, senha_Confi, role) {

  var userInfo = {
    "nome": nome,
    "email": email,
    "senha": senha,
    "senhaConf": senha_Confi,
    "role": role
  };

  try {
    var userText = JSON.stringify(userInfo);
    localStorage.setItem("userInfo", userText);

    if (role === "tecnico") {
      window.location.href = "file:///mnt/HDD-Parte1/Documentos/Projetos/FixFlow/technician/dashboard.html";
    } else {
      window.location.href = "file:///mnt/HDD-Parte1/Documentos/Projetos/FixFlow/client/dashboard.html";
    }
    
  } catch (erro) {
    console.log("erro", erro);
  }
}
