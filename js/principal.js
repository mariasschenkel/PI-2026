

(function () {
  const speakOnClick = (text) => {
    if (!text) return;

    try {
      speechSynthesis.cancel();
    } catch (e) {
    }

    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "pt-BR";
    speechSynthesis.speak(msg);
  };

  // Evita repetir a fala por eventos muito próximos
  const COOLDOWN_MS = 1000;
  const lastSpoken = new WeakMap();

  // Seleciona todos os cards
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const getCardText = () => {
      const sel = card.querySelector(
        ".card-title, h2, h3, p, span"
      );

      return sel
        ? (sel.innerText || sel.textContent).trim()
        : card.innerText.trim();
    };

    card.addEventListener("click", () => {
      const now = Date.now();
      const last = lastSpoken.get(card) || 0;

      if (now - last < COOLDOWN_MS) return;

      lastSpoken.set(card, now);

      const text = getCardText();
      speakOnClick(text);
    });
  });
})();
