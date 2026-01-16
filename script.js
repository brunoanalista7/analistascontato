// ================= DADOS =================
const managersByTable = {
  A: {
    gerente: { nome: "João Paulo", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "Sandra", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Marcos", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Paula", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
    ]
  },
  B: {
    gerente: { nome: "Fernanda Costa", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
    ]
  },

  C: {
    gerente: { nome: "Fernanda Costa", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
    ]
  },

  D: {
    gerente: { nome: "Fernanda Costa", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
    ]
  },

   F: {
    gerente: { nome: "Fernanda Costa", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Gerente Comercial" },
    supervisores: [
      { nome: "João Pedro", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Larissa Melo", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
      { nome: "Daniel Nunes", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Supervisor Comercial" },
    ]
  },

  



  // Continue para tabelas C, D, E, F...
};

// ================= FUNÇÕES =================
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

  // Card do gerente (geral)
  managerSection.innerHTML = cardTemplate({ nome: "João Paulo", foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Gerente Geral" });

  // Cards dos analistas
  const analysts = [
    { nome: "Tayran", tabela: "A" },
    { nome: "Kayo", tabela: "B" },
    { nome: "Carol", tabela: "C" },
    { nome: "Everthon", tabela: "D" },
    { nome: "Bruno", tabela: "E" },
    { nome: "Maria Rita", tabela: "F" }
  ];

  analystsGrid.innerHTML = analysts.map(a => cardTemplate(
    { nome: a.nome, foto: "imageb.jpeg", whatsapp: "5583991108967", cargo: "Analista Comercial" },
    true,
    a.tabela
  )).join("");
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
    renderGestao(); // página gestao.html
  } else {
    renderManagerAndAnalysts(); // página index.html
  }
});
