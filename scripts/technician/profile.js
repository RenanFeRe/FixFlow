const salvar_alteracoes = document.getElementById("salvar-alteracoes");

salvar_alteracoes.addEventListener("click", (e) => {
  nomeEmailAtt(e);
  senhaAtt(e)
  
});

function nomeEmailAtt(e) {
  e.preventDefault();

  //user local
  const userInfo = localStorage.getItem("userInfo");
  const parsedInfo = JSON.parse(userInfo);
  
  //user input
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  
  if (nome === parsedInfo.nome || email === parsedInfo.email) {
    alert("Não há alterações à serem feitas");
  } else {

    alert("Informações atualizadas com sucesso");
    
  }
  

}

function senhaAtt(e) {
  e.preventDefault();

  const senhaAtual = document.getElementById("current-password").value;
  let senhaNova = document.getElementById("new-password").value;
  let senhaConfirm = document.getElementById("confirm-password").value;

  
}

