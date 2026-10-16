// secundario.js - código final e corrigido
(function(){
    // --- PEGA NOME E IDADE DO LOCALSTORAGE ---
    const nomeUser = localStorage.getItem("usuarioNome") || "";
  const idadeUser = localStorage.getItem("usuarioIdade") || "";
  
  
    // Função que substitui as frases por nome e idade
    function personalizarFrases(frasesArray) {
      return frasesArray.map(item => {
          let nova = item.frase;
  
          if (nomeUser && nova.includes("MEU NOME É")) {
              nova = `MEU NOME É ${nomeUser.toUpperCase()}`;
          }
  
          if (idadeUser && nova.includes("EU TENHO")) {
              nova = `EU TENHO ${idadeUser} ANOS`;
          }
  
          return { ...item, frase: nova };
      });
  }
    // PEGA PARAMETRO DA URL
    const params = new URLSearchParams(window.location.search);
    const categoriaSelecionada = (params.get("categoria") || "").toLowerCase();
  
    // ATUALIZA TÍTULO
    const titulo = document.querySelector("main h1");
    if (categoriaSelecionada) {
        titulo.textContent = categoriaSelecionada.toUpperCase();
    }
  
    // CONTAINER
    const container = document.querySelector(".container");
  
    // ARRAY DE FRASES
    let frases = [
        { imagem: "/../img/falar.png", frase: "MEU NOME É", categoria: "falar" },
        { imagem: "/../img/idade.png", frase: "EU TENHO ", categoria: "falar" },
        { imagem: "../img/tudo-bem.png", frase: "TUDO BEM?", categoria: "falar" },
        { imagem: "../img/sim.png", frase: "SIM", categoria: "falar" },
        { imagem: "../img/nao.png", frase: "NÃO", categoria: "falar" },
        { imagem: "../img/por-favor.png", frase: "POR FAVOR", categoria: "falar" },
        { imagem: "../img/obrigado.png", frase: "OBRIGADO", categoria: "falar" },
        { imagem: "../img/nao-entendi.png", frase: "NÃO ENTENDI", categoria: "falar" },
  
        { imagem: "../img/pode-me-ajudar.png", frase: "PODE ME AJUDAR?", categoria: "ajuda" },
        { imagem: "../img/como-faco.png", frase: "COMO FAÇO ISSO?", categoria: "ajuda" },
        { imagem: "../img/preciso-de-ajuda.png", frase: "PRECISO DE AJUDA", categoria: "ajuda" },
        { imagem: "../img/nao-estou-conseguindo.png", frase: "NÃO ESTOU CONSEGUINDO", categoria: "ajuda" },
        { imagem: "../img/repetir.png", frase: "PODE REPETIR?", categoria: "ajuda" },
        { imagem: "../img/como-faz.png", frase: "ME MOSTRA COMO FAZ", categoria: "ajuda" },
        { imagem: "../img/esta-dificil.png", frase: "ESTÁ DIFICIL", categoria: "ajuda" },
        { imagem: "../img/nao-sei.png", frase: "NÃO SEI", categoria: "ajuda" },
  
        { imagem: "../img/mae.png", frase: "QUERO FALAR COM A MINHA MÃE", categoria: "pessoas" },
        { imagem: "../img/pai.png", frase: "QUERO FALAR COM O MEU PAI", categoria: "pessoas" },
        { imagem: "../img/amigo.png", frase: "QUERO FALAR COM O MEU AMIGO", categoria: "pessoas" },
        { imagem: "../img/mensagem.png", frase: "QUERO MANDAR UMA MENSAGEM", categoria: "pessoas" },
        { imagem: "../img/saudade.png", frase: "ESTOU COM SAUDADE", categoria: "pessoas" },
        { imagem: "../img/posso-ligar.png", frase: "POSSO TE LIGAR?", categoria: "pessoas" },
        { imagem: "../img/gosto-de-voce.png", frase: "EU GOSTO DE VOCÊ", categoria: "pessoas" },
        { imagem: "../img/te-amo.png", frase: "EU TE AMO", categoria: "pessoas" },
  
        { imagem: "../img/feliz.png", frase: "ESTOU FELIZ", categoria: "emocoes" },
        { imagem: "../img/triste.png", frase: "ESTOU TRISTE", categoria: "emocoes" },
        { imagem: "../img/raiva.png", frase: "ESTOU COM RAIVA", categoria: "emocoes" }, 
        { imagem: "../img/estou-com-medo.png", frase: "ESTOU COM MEDO", categoria: "emocoes" }, 
        { imagem: "../img/cansado.png", frase: "ESTOU CANSADO", categoria: "emocoes" }, 
        { imagem: "../img/animado.png", frase: "ESTOU ANIMADO", categoria: "emocoes" }, 
        { imagem: "../img/nervoso.png", frase: "ESTOU NERVOSO", categoria: "emocoes" }, 
        { imagem: "../img/vergonha.png", frase: "ESTOU COM VERGONHA", categoria: "emocoes" }, 
        
        { imagem: "../img/acordar.png", frase: "PRECISO ACORDAR CEDO", categoria: "rotina" }, 
        { imagem: "../img/escola.png", frase: "TENHO QUE IR À ESCOLA", categoria: "rotina" }, 
        { imagem: "../img/almoço.png", frase: "É HORA DO ALMOÇO", categoria: "rotina" }, 
        { imagem: "../img/remedio.png", frase: "TENHO QUE TOMAR REMÉDIO", categoria: "rotina" }, 
        { imagem: "../img/tomando-banho.png", frase: "É HORA DO BANHO", categoria: "rotina" }, 
        { imagem: "../img/dormir.png", frase: "PRECISO DORMIR CEDO", categoria: "rotina" }, 
        { imagem: "../img/hospital.png", frase: "TENHO UMA CONSULTA HOJE", categoria: "rotina" }, 
        { imagem: "../img/tarefa.png", frase: "JÁ TERMINEI MINHA TAREFA", categoria: "rotina" }, 
        
        { imagem: "../img/casa.png", frase: "QUERO IR PARA CASA", categoria: "lugares" }, 
        { imagem: "../img/escola.png", frase: "QUERO IR PARA A ESCOLA", categoria: "lugares" }, 
        { imagem: "../img/parque.png", frase: "QUERO IR AO PARQUE", categoria: "lugares" }, 
        { imagem: "../img/hospital.png", frase: "QUERO IR AO HOSPITAL", categoria: "lugares" }, 
        { imagem: "../img/mercado.png", frase: "QUERO IR AO MERCADO", categoria: "lugares" }, 
        { imagem: "../img/caminhar.png", frase: "QUERO SAIR PARA PASSEAR", categoria: "lugares" }, 
        { imagem: "../img/igreja.png", frase: "QUERO IR À IGREJA", categoria: "lugares" }, 
        { imagem: "../img/mapa.png", frase: "ONDE ESTAMOS AGORA?", categoria: "lugares" }, 
        
        { imagem: "../img/com-fome.png", frase: "ESTOU COM FOME", categoria: "comer" }, 
        { imagem: "../img/desidratacao.png", frase: "ESTOU COM SEDE", categoria: "comer" }, 
        { imagem: "../img/almoço.png", frase: "QUERO COMER", categoria: "comer" }, 
        { imagem: "../img/sede.png", frase: "QUERO BEBER", categoria: "comer" }, 
        { imagem: "../img/comida-ruim.png", frase: "NÃO GOSTEI DA COMIDA", categoria: "comer" }, 
        { imagem: "../img/quero-mais.png", frase: "QUERO MAIS, POR FAVOR", categoria: "comer" }, 
        { imagem: "../img/comi-suficiente.png", frase: "JÁ COMI O SUFICIENTE", categoria: "comer" },
        { imagem: "../img/sobremesa.png", frase: "QUERO UMA SOBREMESA", categoria: "comer" },
        
        { imagem: "../img/dor.png", frase: "ESTOU COM DOR", categoria: "saude" }, 
        { imagem: "../img/febre.png", frase: "ESTOU COM FEBRE", categoria: "saude" }, 
        { imagem: "../img/enjoado.png", frase: "ESTOU ENJOADO", categoria: "saude" }, 
        { imagem: "../img/medico.png", frase: "PRECISO IR AO MÉDICO", categoria: "saude" }, 
        { imagem: "../img/remedio.png", frase: "PRECISO TOMAR REMÉDIO", categoria: "saude" }, 
        { imagem: "../img/sentindo-bem.png", frase: "ESTOU ME SENTINDO BEM", categoria: "saude" }, 
        { imagem: "../img/sentindo-mal.png", frase: "ESTOU ME SENTINDO MAL", categoria: "saude" }, 
        { imagem: "../img/alergia.png", frase: "TENHO ALERGIA", categoria: "saude" }, 
        
        { imagem: "../img/brincar.png", frase: "QUERO BRINCAR", categoria: "lazer" }, 
        { imagem: "../img/jogar-bola.png", frase: "QUERO JOGAR BOLA", categoria: "lazer" }, 
        { imagem: "../img/ver-tv.png", frase: "QUERO VER TV", categoria: "lazer" }, 
        { imagem: "../img/ouvir-musica.png", frase: "QUERO OUVIR MÚSICA", categoria: "lazer" }, 
        { imagem: "../img/desenhando.png", frase: "QUERO DESENHAR", categoria: "lazer" }, 
        { imagem: "../img/sair-com-amigos.png", frase: "QUERO SAIR COM MEUS AMIGOS", categoria: "lazer" }, 
        { imagem: "../img/passear.png", frase: "QUERO PASSEAR", categoria: "lazer" }, 
        { imagem: "../img/descanso.png", frase: "QUERO DESCANSAR", categoria: "lazer" }, 
        
        { imagem: "../img/estude.png", frase: "PRECISO ESTUDAR", categoria: "estudar" }, 
        { imagem: "../img/nao-entendi-atividade.png", frase: "NÃO ENTENDI A ATIVIDADE", categoria: "estudar" }, 
        { imagem: "../img/fazer-dnv-atividade.png", frase: "POSSO FAZER DE NOVO A ATIVIDADE?", categoria: "estudar" }, 
        { imagem: "../img/ja-terminei-atv.png", frase: "JÁ TERMINEI O EXERCÍCIO", categoria: "estudar" }, 
        { imagem: "../img/ajuda-atividade.png", frase: "PRECISO DE AJUDA COM A ATIVIDADE", categoria: "estudar" }, 
        { imagem: "../img/computador.png", frase: "POSSO USAR O COMPUTADOR?", categoria: "estudar" }, 
        { imagem: "../img/prova.png", frase: "TENHO PROVA HOJE", categoria: "estudar" }, 
        { imagem: "../img/material-escolar.png", frase: "ESQUECI MEU MATERIAL", categoria: "estudar" }, 
  
        { imagem: "../img/toalete.png", frase: "PRECISO IR AO BANHEIRO", categoria: "necessidades" }, 
        { imagem: "../img/frio.png", frase: "ESTOU COM FRIO", categoria: "necessidades" }, 
        { imagem: "../img/calor.png", frase: "ESTOU COM CALOR", categoria: "necessidades" }, 
        { imagem: "../img/com-sono.png", frase: "ESTOU COM SONO", categoria: "necessidades" }, 
        { imagem: "../img/descanso.png", frase: "PRECISO DESCANSAR", categoria: "necessidades" }, 
        { imagem: "../img/tomando-banho.png", frase: "QUERO TOMAR BANHO", categoria: "necessidades" }, 
        { imagem: "../img/trocar-roupa.png", frase: "QUERO TROCAR DE ROUPA", categoria: "necessidades" }, 
        { imagem: "../img/privacidade.png", frase: "QUERO PRIVACIDADE", categoria: "necessidades" }, 
        
        { imagem: "../img/trabalhar.png", frase: "ESTOU INDO TRABALHAR", categoria: "trabalho" }, 
        { imagem: "../img/tarefa.png", frase: "JA TERMINEI MINHA TAREFA", categoria: "trabalho" }, 
        { imagem: "../img/como-faco.png", frase: "PRECISO DE AJUDA COM O SERVIÇO", categoria: "trabalho" }, 
        { imagem: "../img/pausa.png", frase: "POSSO FAZER UMA PAUSA?", categoria: "trabalho" }, 
        { imagem: "../img/reuniao.png", frase: "TENHO REUNIÃO HOJE", categoria: "trabalho" }, 
        { imagem: "../img/dirigir.png", frase: "ESTOU SAINDO DO TRABALHO", categoria: "trabalho" }, 
        { imagem: "../img/como-posso-ajudar.png", frase: "COM O QUE POSSO AJUDAR?", categoria: "trabalho" }, 
        { imagem: "../img/mostrar.png", frase: "QUERO TE MOSTRAR O QUE EU FIZ", categoria: "trabalho" },
    ];
  
    // 🔥 PERSONALIZA FRASES AQUI ANTES DE USAR
    frases = personalizarFrases(frases);
  
    // FILTRA CATEGORIA
    const listaFiltrada = frases.filter(item => {
        if (!categoriaSelecionada) return true;
        return String(item.categoria || "").toLowerCase() === categoriaSelecionada;
    });
  
    // CRIA CARDS
    listaFiltrada.forEach((item, idx) => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", item.frase || `card ${idx}`);
  
        let imgPath = String(item.imagem || "").replace(/^\/+/, "");
        if (!imgPath) imgPath = "../img/placeholder.png";
  
        card.innerHTML = `
            <img class="fotocard" src="${imgPath}" alt="${item.frase}" />
            <h2>${item.frase}</h2>
        `;
  
        // animação de clique
        card.addEventListener("click", () => {
            card.classList.add("active");
            setTimeout(() => card.classList.remove("active"), 250);
        });
  
        container.appendChild(card);
    });
  
    if (listaFiltrada.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "Nenhum item encontrado para essa categoria.";
        msg.style.textAlign = "center";
        msg.style.marginTop = "40px";
        container.appendChild(msg);
    }
  
    // --- ÁUDIO SEM BOTÃO: agora FUNCIONA porque vem depois dos cards ---
    const speakAlways = (text) => {
        if (!text) return;
        try { speechSynthesis.cancel(); } catch(e){}
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = "pt-BR";
        speechSynthesis.speak(msg);
    };
  
    const COOLDOWN_MS = 500;
    const lastSpoken = new WeakMap();
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
        const getCardText = () => {
            const sel = card.querySelector("h2");
            return sel ? sel.innerText.trim() : card.innerText.trim();
        };
  
        const trySpeak = () => {
            const now = Date.now();
            const last = lastSpoken.get(card) || 0;
            if (now - last < COOLDOWN_MS) return;
            lastSpoken.set(card, now);
  
            const text = getCardText();
            if (text) speakAlways(text);
        };
  
        card.addEventListener("click", trySpeak);
  
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                trySpeak();
            }
        });
    });
  
  })();
  