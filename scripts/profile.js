const salvar_alteracoes = document.getElementById("salvar-alteracoes");
const profileSection = document.querySelector(".profile-avatar-info");
const userInfo = localStorage.getItem("userInfo");
const parsedInfo = JSON.parse(userInfo);

salvar_alteracoes.addEventListener("click", (e) => {
  //user input
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (nome === "" && email === "") {
    alert("Campos vázios");
  } else {
    nomeEmailAtt(e, nome, email);
    senhaAtt(e);
  }
  mostrarInfo();
});

function mostrarInfo() {
  profileSection.innerHTML = `
      <h3 id="nome_section">${parsedInfo.nome}</h3>
      <p id="email_section">${parsedInfo.email}</p>
      <span class="badge badge-status-open" style="margin-top: 4px;">${parsedInfo.role}</span>
    `;
}
mostrarInfo();

function nomeEmailAtt(e, nome, email) {
  e.preventDefault();

  if (nome === parsedInfo.nome && email === parsedInfo.email) {
    alert("Não há alterações a serem feitas");
  } else {
    parsedInfo.nome = nome;
    parsedInfo.email = email;
    localStorage.setItem("userInfo", JSON.stringify(parsedInfo));
    alert("Informações atualizadas com sucesso");
  }
}

function senhaAtt(e) {
  e.preventDefault();

  const senhaAtual = parsedInfo.senha;
  const senha = document.getElementById("current-password").value;
  let senhaNova = document.getElementById("new-password").value;
  let senhaConfirm = document.getElementById("confirm-password").value;

  if (senhaNova !== senhaAtual) {
    if (senhaAtual === senha) {
      if (senhaNova === senhaConfirm) {
        alert("Senha atualizada com sucesso");
        parsedInfo.senha = senhaNova;
        localStorage.setItem("userInfo", JSON.stringify(parsedInfo));
      } else {
        alert("As senhas não coincidem");
      }
    } else {
      alert("Senha atual incorreta");
    }
  } else {
    alert("A senha atual é igual a senha escrita");
  }
}
