const login_btn = document.getElementById("login-btn");

// botão login
login_btn.addEventListener("click", (e) => {
  login(e);
});

// função vai ver se existe uma conta e vai redirecionar para a dashboard correspondente
function login(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userInfo = localStorage.getItem("userInfo");
  const parsedInfo = JSON.parse(userInfo);

  if (parsedInfo === null) {
    alert("Email não encontradom, Fazer login!");
  } else {
    if (parsedInfo.email === email && parsedInfo.senha === password) {
      if (parsedInfo.role === "tecnico") {
        window.location.href = "technician/dashboard.html";
      } else {
        window.location.href = "client/dashboard.html";
      }
    } else {
      alert("Email ou senha incorretos.");
    }
  }
}
