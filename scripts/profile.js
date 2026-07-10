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
    attInfo(e, nome, email)
  }
});

function mostrarInfo() {
  profileSection.innerHTML = `
      <h3 id="nome_section">${parsedInfo.nome}</h3>
      <p id="email_section">${parsedInfo.email}</p>
      <span class="badge badge-status-open" style="margin-top: 4px;">${parsedInfo.role}</span>
    `;
}
mostrarInfo();

function attInfo(e, nome, email) {
  e.preventDefault();

  const senha = document.getElementById("current-password").value;
  const senhaNova = document.getElementById("new-password").value;
  const senhaConfirm = document.getElementById("confirm-password").value;

  if (parsedInfo.senha === senha) {
    if (nome === parsedInfo.nome && email === parsedInfo.email) {
      alert("Não há alterações a serem feitas");
    } else {
      parsedInfo.nome = nome;
      parsedInfo.email = email;
      mostrarInfo();
      alert("Alterações feitas com sucesso!");
    }

    if (senhaNova === senhaConfirm) {
      parsedInfo.senha = senhaNova;
      alert("Senha Alterada");
    } else {
      alert("Algo deu errado");
    }

    localStorage.setItem("userInfo", JSON.stringify(parsedInfo));
  } else if (senha === "") {
    alert("Precisa da senha para aplicar as mudanças");
  }

}
