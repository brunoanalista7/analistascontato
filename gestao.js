// Dados do gerente
const manager = {
  nome: "Sandra",
  foto: "imageb.jpeg",
  whatsapp: "5583991108967",
  cargo: "Gerente Tabela E",
  tabela: ["Tabela E"]
};

// Dados dos supervisores (3)
const supervisors = [
  {
    nome: "Marcos",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Supervisor Comercial",
    tabela: ["Tabela E"]
  },
  {
    nome: "Pedro",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Supervisor Comercial",
    tabela: ["Tabela E"]
  },
  {
    nome: "Natan",
    foto: "imageb.jpeg",
    whatsapp: "5583991108967",
    cargo: "Supervisor Comercial",
    tabela: ["Tabela E"]
  }
];

// Template do card
function cardTemplate({ nome, foto, whatsapp, cargo, tabela }, isManager = false) {
  const waLink = `https://web.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(
    `Olá ${nome}, gostaria de falar sobre uma proposta comercial.`
  )}`;

  return `
    <article class="card" style="${isManager ? 'border: 3px solid #d90429;' : ''}">
      <img class="card__image" src="${foto}" alt="Foto de ${nome}">
      <div class="card__body">
        <h2 class="card__name">${nome}</h2>
        <p class="card__role">${cargo}</p>

        <div class="card__meta">
          ${tabela.map(t => `<span class="badge">${t}</span>`).join("")}
        </div>

        <div class="card__actions">
          <button class="btn btn--whatsapp" onclick="window.open('${waLink}', '_blank')">
            Falar no WhatsApp
          </button>

          <button class="btn btn--outline" onclick="navigator.clipboard.writeText('${whatsapp}')">
            Copiar número
          </button>
        </div>
      </div>
    </article>
  `;
}

// Renderiza gerente + supervisores
function renderManagement() {
  const grid = document.getElementById("managementGrid");
  const managers = [manager, ...supervisors];
  grid.innerHTML = managers.map(m => cardTemplate(m, m === manager)).join("");
}

document.addEventListener("DOMContentLoaded", renderManagement);
