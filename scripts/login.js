const login_btn = document.getElementById("login-btn");

login_btn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userInfo = localStorage.getItem("userInfo");
  const parsedInfo = JSON.parse(userInfo);
  
  if (parsedInfo.email === email && parsedInfo.senha === password) {

    if (parsedInfo.role === "tecnico") {
      window.location.href = "technician/dashboard.html";
    } else {
      window.location.href = "client/dashboard.html";
    }
    
  } else {
    alert("Email ou senha incorretos.");
  }
  });