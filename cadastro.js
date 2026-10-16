document.getElementById("cadastroForm").addEventListener("submit", function(event) {

  event.preventDefault(); // precisa voltar o preventDefault!

  const nome = document.getElementById("nome").value.trim();
  const idade = document.getElementById("idade").value.trim();

  const necessidades = [...document.querySelectorAll("input[name='necessidades']:checked")].map(n => n.value);

  const nomeResp = document.getElementById("nomeResp").value.trim();
  const telResp = document.getElementById("telResp").value.trim();
  const emailResp = document.getElementById("emailResp").value.trim();

  // grava
  localStorage.setItem("usuarioNome", nome);
  localStorage.setItem("usuarioIdade", idade);


  // redireciona para principal.html
  window.location.href = "principal.html";
});