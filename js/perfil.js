document.addEventListener("DOMContentLoaded", () => {
  // campo do formulário -> chave no localStorage
  const MAPA = {
    perfNome: "usuarioNome",
    perfIdade: "usuarioIdade",
    perfEmail: "usuarioEmail",
    perfNomeResp: "respNome",
    perfTelResp: "respTel",
    perfEmailResp: "respEmail"
  };

  const btn = document.getElementById("btnPerfil");

  const painel = document.createElement("aside");
  painel.className = "perfil-painel";
  painel.hidden = true;
  painel.setAttribute("role", "dialog");
  painel.setAttribute("aria-labelledby", "perfilTitulo");
  painel.innerHTML = `
    <div class="perfil-topo">
      <h2 id="perfilTitulo">MEUS DADOS</h2>
      <button type="button" class="perfil-fechar" id="perfilFechar" aria-label="Fechar">✕</button>
    </div>

    <form id="perfilForm">

      <label for="perfNome">NOME COMPLETO</label>
      <input type="text" id="perfNome" required>

      <label for="perfIdade">IDADE</label>
      <input type="number" id="perfIdade" min="1" required>

      <label for="perfEmail">E-MAIL</label>
      <input type="email" id="perfEmail" required>

      <label for="perfSenha">NOVA SENHA</label>
      <input type="password" id="perfSenha" placeholder="Deixe em branco para manter a atual">

      <h3>RESPONSÁVEL / ACOMPANHANTE (OPCIONAL)</h3>

      <label for="perfNomeResp">NOME DO RESPONSÁVEL</label>
      <input type="text" id="perfNomeResp">

      <label for="perfTelResp">TELEFONE</label>
      <input type="tel" id="perfTelResp" placeholder="(00) 00000-0000">

      <label for="perfEmailResp">E-MAIL</label>
      <input type="email" id="perfEmailResp">

      <button type="submit" class="perfil-salvar">SALVAR ALTERAÇÕES</button>
      <p id="perfilMsg" class="perfil-msg" aria-live="polite"></p>
    </form>
  `;
  document.body.appendChild(painel);

  const form = document.getElementById("perfilForm");
  const msg = document.getElementById("perfilMsg");

  function abrir() {
    for (const [id, chave] of Object.entries(MAPA)) {
      document.getElementById(id).value = localStorage.getItem(chave) || "";
    }
    document.getElementById("perfSenha").value = "";
    msg.textContent = "";
    painel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.getElementById("perfNome").focus();
  }

  function fechar() {
    painel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  // o botão abre e fecha o painel
  btn.addEventListener("click", () => (painel.hidden ? abrir() : fechar()));
  document.getElementById("perfilFechar").addEventListener("click", fechar);

  // fecha com ESC ou clicando fora do painel
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !painel.hidden) fechar();
  });
  document.addEventListener("click", (e) => {
    if (!painel.hidden && !painel.contains(e.target) && !btn.contains(e.target)) fechar();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    for (const [id, chave] of Object.entries(MAPA)) {
      localStorage.setItem(chave, document.getElementById(id).value.trim());
    }

    const novaSenha = document.getElementById("perfSenha").value;
    if (novaSenha) localStorage.setItem("usuarioSenha", novaSenha);

    // atualiza o "BEM VINDO(A)" da página principal, se existir
    const titulo = document.getElementById("tituloPrincipal");
    if (titulo) {
      titulo.innerText = `BEM VINDO(A), ${localStorage.getItem("usuarioNome").toUpperCase()}`;
    }

    msg.textContent = "Dados atualizados com sucesso!";
    setTimeout(() => location.reload(), 1000);
  });
});