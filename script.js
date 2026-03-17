// ================= DADOS =================
const managersByTable = {
  A: {
    gerente: { nome: "João Paulo", foto: "gerente-a.jpg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "Sandra", foto: "sandra.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Marcos", foto: "marcos.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Paula", foto: "paula.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" }
    ]
  },

  B: {
    gerente: { nome: "Fernanda Costa", foto: "fernanda.jpg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "joao-pedro.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "larissa.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "daniel.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" }
    ]
  },

  C: {
    gerente: { nome: "Fernanda Costa", foto: "fernanda.jpg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "joao-pedro.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "larissa.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "daniel.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" }
    ]
  },

  D: {
    gerente: { nome: "Fernanda Costa", foto: "fernanda.jpg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "joao-pedro.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "larissa.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "daniel.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" }
    ]
  },

  E: {
    gerente: { nome: "Carlos Henrique", foto: "carlos.jpg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "Rafael Lima", foto: "rafael.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Juliana Alves", foto: "juliana.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Felipe Rocha", foto: "felipe.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" }
    ]
  },

  F: {
    gerente: { nome: "Fernanda Costa", foto: "fernanda.jpg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "joao-pedro.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "larissa.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "daniel.jpg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" }
    ]
  }
};

// ================= TEMPLATE DO CARD =================
function cardTemplate({ nome, foto, whatsapp, cargo }, showGestao = false, tabela = null) {
  const waLink = `https://web.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(
    `Olá ${nome}, gostaria de falar sobre uma proposta comercial.`
  )}`;

  return `
    <article class="card">
      <img class="card__image" src="${foto}" alt="Foto de ${nome}">
      <div class="card__body">
        <h2 class="card__name">${nome}</h2>
        <p class="card__role">${cargo}</p>
        <div class="card__actions">
          <button class="btn btn--whatsapp" onclick="openWhatsApp('${waLink}')">Falar no WhatsApp</button>
          <button class="btn btn--outline" onclick="copyContact('${whatsapp}')">Copiar número</button>
          ${showGestao ? `<a href="gestao.html?tabela=${tabela}" class="btn btn--secondary">Gestão da Tabela</a>` : ""}
        </div>
      </div>
    </article>
  `;
}

// ================= FUNÇÕES AUXILIARES =================
function openWhatsApp(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function copyContact(number) {
  navigator.clipboard.writeText(number)
    .then(() => alert(`Número ${number} copiado!`))
    .catch(() => alert("Não foi possível copiar o número."));
}

// ================= RENDER INDEX =================
function renderManagerAndAnalysts() {
  const managerSection = document.getElementById("managerSection");
  const analystsGrid = document.getElementById("analystsGrid");

  // Gerente geral
  managerSection.innerHTML = cardTemplate({
    nome: "João Paulo",
    foto: "joaogerente.png",
    whatsapp: "5583991108967",
    cargo: "Gerente Geral"
  });

  // Analistas (fotos individuais)
  const analysts = [
    { nome: "Elaine - Tabela A", tabela: "A", foto: "elaine.png" },
    { nome: "Kayo - Tabela B", tabela: "B", foto: "kayo.png" },
    { nome: "Carol - Tabela C", tabela: "C", foto: "carol.png" },
    { nome: "Elaine - Tabela D", tabela: "D", foto: "elaine.png" },
    { nome: "Bruno - Tabela E", tabela: "E", foto: "bruno.png" },
    { nome: "Maria Rita - Tabela F", tabela: "F", foto: "rita.png" }
  ];

  analystsGrid.innerHTML = analysts.map(a =>
    cardTemplate(
      {
        nome: a.nome,
        foto: a.foto,
        whatsapp: "5583991108967",
        cargo: "Analista Comercial"
      },
      true,
      a.tabela
    )
  ).join("");
}

// ================= RENDER GESTÃO =================
function renderGestao() {
  const params = new URLSearchParams(window.location.search);
  const tabela = params.get("tabela");
  const grid = document.getElementById("managementGrid");

  if (!tabela || !managersByTable[tabela]) {
    grid.innerHTML = "<p>Tabela não encontrada.</p>";
    return;
  }

  const data = managersByTable[tabela];

  grid.innerHTML = `
    ${cardTemplate(data.gerente)}
    ${data.supervisores.map(s => cardTemplate(s)).join("")}
  `;
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("managementGrid")) {
    renderGestao();      // gestao.html
  } else {
    renderManagerAndAnalysts(); // index.html
  }
});
