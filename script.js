const DADOS = {
    nome: "Isabelly Machado",
    papel: [
      "desenvolvedora de sistemas",
      "estudante & builder",
      "curiosa por tecnologia"
    ],
    status: "disponível para projetos",
    bio: "Me chamo Isabelly, sou uma pessoa criativa e gosto muito de aprender coisas novas. Estudo programação e desenvolvimento de sistemas, gosto de construir sites, explorar novas ideias e transformar minha criatividade em projetos.",
    sobre: {
      paragrafo1: "Descobri o universo da tecnologia na escola e, desde o primeiro contato, soube que queria criar soluções por meio do código. A formação técnica me deu a estrutura lógica necessária, mas foi no desenvolvimento front-end que encontrei meu verdadeiro propósito profissional. Sou movida pelo desafio de construir a ponte entre o design e a funcionalidade. Criar interfaces fluidas, dinâmicas e visualmente impactantes é o que me motiva a evoluir continuamente como desenvolvedor.",
      paragrafo2: "Criando, aprendendo e transformando linhas de código em interfaces reais. Meu foco atual é registrar a evolução dos meus projetos de front-end com orgulho de cada desafio superado nas aulas. Uma jornada de puro aprendizado por enquanto, mas com os olhos atentos ao que o futuro reserva.",
      timeline: [
        { data: "2025", texto: "Início do curso de <strong>Desenvolvimento de Sistemas</strong>" },
        { data: "2026", texto: "Primeiro projeto em equipe: <strong>Queimadas e Qualidades do Ar</strong>" },
        { data: "2026", texto: "Projetos Desenvolvidos: <strong>Tabela interativa</strong>" },
        { data: "2026", texto: "Projetos Desenvolvidos: <strong>Alura Plus</strong>"},
        { data: "2026", texto: "Projetos Desenvolvidos: <strong> Projeto Barbearia</strong>"},
        { data: "2026", texto: "Projetos Desenvolvidos: <strong> Tabela </strong>"},
      ]
    },
    curriculoUrl: "https://canva.link/w297vaiia8dkin9",
    email: "misabellydepaula@gmail.com",
    redes: [
      { nome: "GitHub", url: "https://github.com/isabellymachadopaula-create" },
      { nome: "LinkedIn", url: "#" },
      { nome: "Instagram", url: "https://instagram.com" }
    ],
    projetos: [
      {
        versao: "v1.0",
        titulo: "Alura Plus",
        data: "Mar 2026",
        descricao: "O projeto mostra de forma clara o que o Alura+ oferece, com layout responsivo, organização simples e foco na experiência do usuário. Ele foi desenvolvido como uma página promocional, reunindo informações essenciais e links diretos para testar e visualizar o código.",
        tags: ["HTML", "CSS",],
        imagem: "screenshotalura.png",
        linkDemo: "https://aluraplus-lemon-kappa-61.vercel.app/",
        linkRepo: "https://github.com/isabellymachadopaula-create/Alura_plus",
      },
      {
        versao: "v1.0",
        titulo: "Tabela Interativa",
        data: "Mar 2026",
        descricao: "Sistema web de controle de inventário desenvolvido com HTML, CSS e JavaScript puro para facilitar o cadastro, a categorização e o monitoramento dinâmico de produtos, preços e estoque em tempo real.",
        tags: ["HTML", "CSS", "Script"],
        imagem: "screenshottabela.png",
        linkDemo: "https://tabela-interativa-neon.vercel.app/",
        linkRepo: "https://github.com/isabellymachadopaula-create/tabela-interativa.git"
      },
      {
        versao: "v1.0",
        titulo: "Queimadas e Qualidade do Ar",
        data: "Set 2026",
        descricao: "Portal informativo desenvolvido em HTML e CSS para conscientizar sobre os impactos das queimadas na qualidade do ar em Itaperuçu (PR), reunindo dados visuais, dicas de prevenção e um formulário para registro de ocorrências.",
        tags: ["HTML", "CSS",],
        imagem: "screenshotqueimadas.png",
        linkDemo: "https://queimadasequalidadedoar.vercel.app/",
        linkRepo: "https://github.com/isabellymachadopaula-create/Queimadas-e-Qualidade-do-Ar",
      },
      {
        versao: "v1.0",
        titulo: "Projeto Barbearia",
        data: "Mar 2026",
        descricao: "Landing page institucional desenvolvida em HTML e CSS para fortalecer a presença digital de uma barbearia e agilizar o atendimento ao cliente, apresentando serviços, diferenciais e um formulário de agendamento online",
        tags: ["HTML", "CSS",],
        imagem: "screenshotbarbearia.png",
        linkDemo: "https://barbearia-yg5k.vercel.app/",
        linkRepo: " https://github.com/isabellymachadopaula-create/barbearia",
      },
      {
        versao: "v1.0",
        titulo: "Tabela Isa",
        data: "Mar 2026",
        descricao: "Tabela de inventário desenvolvida em HTML e CSS para organizar e facilitar a visualização do acervo de uma biblioteca, estruturando códigos, títulos, autores, gêneros literários e status de disponibilidade.",
        tags: ["HTML", "CSS",],
        imagem: "screenshotabela2.png",
        linkDemo: "https://tabelaisabelly.vercel.app/",
        linkRepo: "https://github.com/isabellymachadopaula-create/tabelaisa",
      },
        
    ],
    skills: [
      { categoria: "Front-End", itens: ["HTML", "CSS", "JavaScript"] },
      { categoria: "Back-End", itens: ["Java", "Python", "PHP"] },
      { categoria: "Dados", itens: ["MySQL", "SQL Server"] },
      { categoria: "Ferramentas", itens: ["Git", "GitHub", "VS Code", "Vercel", "Canva"] }
    ]
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    renderConteudo();
    iniciarTema();
    iniciarMenuMobile();
    iniciarTypingEfeitos();
    iniciarFiltrosDeProjetos();
    iniciarCopiarEmail();
    iniciarBotaoTopo();
    iniciarLogAnimado();
  });
  
  function renderConteudo() {
    setText("nav-nome", DADOS.nome);
    setText("destaque-nome", DADOS.nome);
    setText("texto-status", DADOS.status);
    setText("destaque-bio", DADOS.bio);
    setText("rodape-nome", DADOS.nome);
    setText("rodape-ano", new Date().getFullYear());
    document.title = `${DADOS.nome} - Portfólio`;
  
    setText("sobre-paragrafo-1", DADOS.sobre.paragrafo1);
    setText("sobre-paragrafo-2", DADOS.sobre.paragrafo2);
  
    const cv = document.getElementById("contato-curriculo");
    if (cv) cv.href = DADOS.curriculoUrl;
  
    const tl = document.getElementById("sobre-linha-tempo");
    if (tl) {
      tl.innerHTML = DADOS.sobre.timeline.map(item => `
        <li>
          <span class="linha-data">${item.data}</span>
          <span class="linha-texto">${item.texto}</span>
        </li>
      `).join("");
    }
  
    const socialsHtml = DADOS.redes.map(r => `
      <li>
        <a href="${r.url}" target="_blank" rel="noopener">${r.nome}</a>
      </li>
    `).join("");
  
    const destRedes = document.getElementById("destaque-redes");
    if (destRedes) destRedes.innerHTML = socialsHtml;
    
    const contRedes = document.getElementById("contato-redes");
    if (contRedes) contRedes.innerHTML = socialsHtml;
  
    const timeline = document.getElementById("projetos-linha-tempo");
    if (timeline) {
      timeline.innerHTML = DADOS.projetos.map((p, i) => `
        <article class="projeto" data-tags="${p.tags.join(',').toLowerCase()}">
          <div class="projeto__versao">${p.versao}</div>
          <div class="projeto__info">
            <h3 class="projeto__titulo">${p.titulo}</h3>
            <p class="projeto__meta">${p.data}</p>
            <div class="projeto__descricao">${p.descricao}</div>
            <div class="projeto__tags">
              ${p.tags.map(t => `<span class="etiqueta">${t}</span>`).join("")}
            </div>
            <div class="projeto__links">
              ${p.linkDemo ? `<a href="${p.linkDemo}" target="_blank" rel="noopener">Ver demo -></a>` : ""}
              ${p.linkRepo ? `<a href="${p.linkRepo}" target="_blank" rel="noopener">Código-></a>` : ""}
            </div>
          </div>
          <div class="projeto__miniatura">
            ${p.imagem ? `<img src="${p.imagem}" alt="Captura de tela de ${p.titulo}">` : "<span>screenshot do projeto</span>"}
          </div>
        </article>
      `).join("");
    }
  
    const tags = new Set();
    DADOS.projetos.forEach(p => p.tags.forEach(t => tags.add(t)));
  
    const filters = document.getElementById("projetos-filtros");
    if (filters) {
      filters.innerHTML = `<button class="filtro-botao esta-ativo" data-filter="todos">todos</button>` + 
        [...tags].map(t => `<button class="filtro-botao" data-filter="${t.toLowerCase()}">${t}</button>`).join("");
    }
  
    const skillsWrap = document.getElementById("habilidades-grupos");
    if (skillsWrap) {
      skillsWrap.innerHTML = DADOS.skills.map(g => `
        <div class="habilidade-grupo">
          <h3>${g.categoria}</h3>
          <div class="habilidade-grupo__tags">
            ${g.itens.map(i => `<span class="habilidade-etiqueta">${i}</span>`).join("")}
          </div>
        </div>
      `).join("");
    }
  }
  
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  
  function iniciarTema() {
    const bnt = document.getElementById("alternar-tema");
    if (!bnt) return;
    
    const salvo = localStorage.getItem("portfolio-theme");
    if (salvo) document.documentElement.setAttribute("data-theme", salvo);
  
    bnt.addEventListener("click", () => {
      const atual = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      const novo = atual === "light" ? "dark" : "light";
      if (novo === "dark") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
      localStorage.setItem("portfolio-theme", novo);
    });
  }
  
  function iniciarMenuMobile() {
    const burger = document.getElementById("menu-hamburguer");
    const links = document.getElementById("menu-links");
    if (!burger || !links) return;
  
    burger.addEventListener("click", () => {
      const aberto = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!aberto));
      links.classList.toggle("esta-aberto");
    });
  
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        burger.setAttribute("aria-expanded", "false");
        links.classList.remove("esta-aberto");
      });
    });
  }
  
  function iniciarTypingEfeitos() {
    const el = document.getElementById("texto-cargo");
    if (!el) return;
    
    const frases = DADOS.papel;
    let fraseIdx = 0, charIdx = 0, apagando = false;
  
    function tick() {
      const frase = frases[fraseIdx];
      if (!apagando) {
        el.textContent = frase.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === frase.length) {
          apagando = true;
          setTimeout(tick, 1500);
          return;
        }
      } else {
        el.textContent = frase.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          apagando = false;
          fraseIdx = (fraseIdx + 1) % frases.length;
        }
      }
      setTimeout(tick, apagando ? 35 : 65);
    }
    tick();
  }
  
  function iniciarFiltrosDeProjetos() {
    // Como os botões de filtro são criados dinamicamente no renderConteudo(),
    // usamos delegação de eventos no elemento pai ou re-selecionamos eles aqui.
    const filtersContainer = document.getElementById("projetos-filtros");
    if (!filtersContainer) return;
  
    filtersContainer.addEventListener("click", (e) => {
      if (!e.target.classList.contains("filtro-botao")) return;
      
      const chip = e.target;
      const chips = filtersContainer.querySelectorAll(".filtro-botao");
      const projetos = document.querySelectorAll(".projeto");
  
      chips.forEach(c => c.classList.remove("esta-ativo"));
      chip.classList.add("esta-ativo");
  
      const filtro = chip.dataset.filter;
      projetos.forEach(p => {
        const tags = p.dataset.tags.split(",");
        const mostra = filtro === "todos" || tags.includes(filtro);
        p.classList.toggle("esta-oculto", !mostra);
      });
    });
  }
  
  function iniciarCopiarEmail() {
    const bnt = document.getElementById("copiar-email"); // Corrigido de copiara-email
    const label = document.getElementById("copiar-email-texto");
    if (!bnt || !label) return;
  
    bnt.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(DADOS.email);
        label.textContent = "E-mail copiado!";
      } catch (e) {
        label.textContent = DADOS.email;
      }
      setTimeout(() => label.textContent = "Copiar e-mail", 2200);
    });
  }
  
  function iniciarBotaoTopo() {
    const bnt = document.getElementById("voltar-topo");
    bnt.addEventListener("click", () =>{
      window.scrollTo({ top: 0, behavior: "smooth"});
    });
  }
  
  function iniciarLogAnimado() {
    const linhas = DADOS.projetos.slice(-3).map(p => `> deploy ${p.titulo.toLowerCase().replace(/\s+/g, "-")} ${p.versao} ok`);
    const ids = ["linha-log-1", "linha-log-2", "linha-log-3"];
  
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el || !linhas[i]) return;
      setTimeout(() => { el.textContent = linhas[i]; }, 900 + i * 450);
    });
  }
  