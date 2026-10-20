document.addEventListener("DOMContentLoaded", () => {
  const FAQ = [
    {
      p: "O que é o InclusIA?",
      r: "É um site criado para facilitar a comunicação de pessoas com deficiência intelectual ou dificuldades de comunicação, promovendo autonomia e inclusão."
    },
    {
      p: "Como posso me comunicar pelo site?",
      r: "Você pode selecionar cartões com imagens e frases que representam o que deseja expressar, como sentimentos, necessidades e pedidos de ajuda."
    },
    {
      p: "Os cartões possuem áudio?",
      r: "Sim! Os cartões possuem áudio para ajudar o usuário a compreender as mensagens e facilitar a comunicação no dia a dia."
    },
    {
      p: "O que é o botão de Libras?",
      r: "É um recurso de acessibilidade que auxilia na tradução de conteúdos para a Língua Brasileira de Sinais (Libras), facilitando o acesso de pessoas surdas."
    },
    {
      p: "Preciso saber ler para utilizar o InclusIA?",
      r: "Não necessariamente. As imagens e os áudios auxiliam na compreensão das mensagens, tornando a navegação mais acessível."
    },
    {
      p: "Quem pode utilizar o InclusIA?",
      r: "O site foi desenvolvido principalmente para pessoas com deficiência intelectual ou dificuldades de comunicação, mas também pode ser utilizado por familiares, responsáveis e cuidadores como ferramenta de apoio."
    }
  ];

  const btn = document.getElementById("btnFaq");

  const painel = document.createElement("aside");
  painel.className = "faq-painel";
  painel.hidden = true;
  painel.setAttribute("role", "dialog");
  painel.setAttribute("aria-labelledby", "faqTitulo");
  painel.innerHTML = `
    <div class="faq-topo">
      <h2 id="faqTitulo">DÚVIDAS FREQUENTES</h2>
      <button type="button" class="faq-fechar" id="faqFechar" aria-label="Fechar">✕</button>
    </div>
    <div class="faq-lista">
      ${FAQ.map((item, i) => `
        <button type="button" class="faq-pergunta" id="faqP${i}" aria-expanded="${i === 0}" aria-controls="faqR${i}">${item.p}</button>
        <div class="faq-resposta" id="faqR${i}" role="region" aria-labelledby="faqP${i}" ${i === 0 ? "" : "hidden"}>${item.r}</div>
      `).join("")}
    </div>
  `;
  document.body.appendChild(painel);

  // sanfona: abre uma pergunta por vez
  const perguntas = painel.querySelectorAll(".faq-pergunta");
  perguntas.forEach((p) => {
    p.addEventListener("click", () => {
      const estavaAberta = p.getAttribute("aria-expanded") === "true";

      perguntas.forEach((o) => {
        o.setAttribute("aria-expanded", "false");
        document.getElementById(o.getAttribute("aria-controls")).hidden = true;
      });

      if (!estavaAberta) {
        p.setAttribute("aria-expanded", "true");
        document.getElementById(p.getAttribute("aria-controls")).hidden = false;
      }
    });
  });

  function abrir() {
    painel.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }

  function fechar() {
    painel.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => (painel.hidden ? abrir() : fechar()));
  document.getElementById("faqFechar").addEventListener("click", fechar);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !painel.hidden) fechar();
  });
  document.addEventListener("click", (e) => {
    if (!painel.hidden && !painel.contains(e.target) && !btn.contains(e.target)) fechar();
  });
});