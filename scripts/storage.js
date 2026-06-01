export function storage(nome, email, senha, senha_Confi, role) {
  var userInfo = {
    nome: nome,
    email: email,
    senha: senha,
    senhaConf: senha_Confi,
    role: role,
  };

  try {
    var userText = JSON.stringify(userInfo);
    localStorage.setItem("userInfo", userText);

    if (role === "tecnico") {
      window.location.href =
        "file:///mnt/HDD-Parte1/Documentos/Projetos/FixFlow/technician/dashboard.html";
    } else {
      window.location.href =
        "file:///mnt/HDD-Parte1/Documentos/Projetos/FixFlow/client/dashboard.html";
    }
  } catch (erro) {
    console.log("erro", erro);
  }
}
